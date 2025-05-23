#!/usr/bin/env python3
"""
Work Order Image Text Extractor
Extracts service descriptions and closeout notes from PNG work order images
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Optional
import logging

try:
    import pytesseract
    from PIL import Image, ImageEnhance, ImageFilter
    import cv2
    import numpy as np
except ImportError:
    print("Required packages not installed. Please run:")
    print("pip install pytesseract pillow opencv-python numpy")
    exit(1)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class WorkOrderTextExtractor:
    def __init__(self, images_directory: str, output_file: str = "extracted_work_orders.json"):
        self.images_dir = Path(images_directory)
        self.output_file = output_file
        self.extracted_data = []
        
        # Configure Tesseract (adjust path if needed)
        # For macOS with Homebrew: /opt/homebrew/bin/tesseract
        # For Windows: Usually installed in Program Files
        # pytesseract.pytesseract.tesseract_cmd = '/opt/homebrew/bin/tesseract'
        
    def preprocess_image(self, image_path: str) -> Image.Image:
        """
        Preprocess image to improve OCR accuracy
        """
        # Load image with PIL
        img = Image.open(image_path)
        
        # Convert to grayscale
        if img.mode != 'L':
            img = img.convert('L')
        
        # Enhance contrast
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(2.0)
        
        # Enhance sharpness
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(2.0)
        
        # Apply slight blur to reduce noise
        img = img.filter(ImageFilter.MedianFilter(size=3))
        
        return img
    
    def extract_text_from_image(self, image_path: str) -> str:
        """
        Extract text from a single image using OCR
        """
        try:
            # Preprocess image
            processed_img = self.preprocess_image(image_path)
            
            # Use Tesseract with custom config for better results
            custom_config = r'--oem 3 --psm 6'
            text = pytesseract.image_to_string(processed_img, config=custom_config)
            
            return text
        except Exception as e:
            logger.error(f"Error extracting text from {image_path}: {str(e)}")
            return ""
    
    def parse_service_description(self, text: str) -> Optional[str]:
        """
        Extract service description from OCR text
        """
        # Common patterns for service description sections
        patterns = [
            r"Service Description[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Description[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Service Details[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
            if match:
                description = match.group(1).strip()
                # Clean up the text
                description = re.sub(r'\n+', ' ', description)  # Replace multiple newlines with space
                description = re.sub(r'\s+', ' ', description)  # Replace multiple spaces with single space
                return description
        
        return None
    
    def parse_closeout_notes(self, text: str) -> Optional[str]:
        """
        Extract closeout notes from OCR text
        """
        # Common patterns for closeout notes
        patterns = [
            r"Closeout Notes?[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Close[- ]?out[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Completion Notes?[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Final Notes?[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)",
            r"Work Summary[:\s]*\n(.*?)(?=\n\n|\nWork Order|\nDeliverables|\nPolicies|\nTasks|\nBuyer Custom|$)"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
            if match:
                notes = match.group(1).strip()
                # Clean up the text
                notes = re.sub(r'\n+', ' ', notes)  # Replace multiple newlines with space
                notes = re.sub(r'\s+', ' ', notes)  # Replace multiple spaces with single space
                return notes
        
        return None
    
    def extract_work_order_id(self, text: str, filename: str) -> str:
        """
        Try to extract work order ID from text or use filename
        """
        # Look for work order ID patterns in text
        patterns = [
            r"Work Order[:\s]*#?(\d+)",
            r"WO[:\s]*#?(\d+)",
            r"Order[:\s]*#?(\d+)",
            r"ID[:\s]*#?(\d+)"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1)
        
        # Fall back to extracting numbers from filename
        filename_match = re.search(r'(\d+)', filename)
        if filename_match:
            return filename_match.group(1)
        
        # Use filename without extension as fallback
        return Path(filename).stem
    
    def process_single_image(self, image_path: Path) -> Dict:
        """
        Process a single image and extract relevant information
        """
        logger.info(f"Processing: {image_path.name}")
        
        # Extract text from image
        text = self.extract_text_from_image(str(image_path))
        
        if not text.strip():
            logger.warning(f"No text extracted from {image_path.name}")
            return {
                "filename": image_path.name,
                "work_order_id": self.extract_work_order_id("", image_path.name),
                "service_description": None,
                "closeout_notes": None,
                "extraction_success": False,
                "error": "No text extracted"
            }
        
        # Parse service description and closeout notes
        service_description = self.parse_service_description(text)
        closeout_notes = self.parse_closeout_notes(text)
        work_order_id = self.extract_work_order_id(text, image_path.name)
        
        return {
            "filename": image_path.name,
            "work_order_id": work_order_id,
            "service_description": service_description,
            "closeout_notes": closeout_notes,
            "extraction_success": bool(service_description or closeout_notes),
            "raw_text_preview": text[:500] + "..." if len(text) > 500 else text  # First 500 chars for debugging
        }
    
    def process_all_images(self) -> None:
        """
        Process all PNG images in the directory
        """
        if not self.images_dir.exists():
            logger.error(f"Images directory does not exist: {self.images_dir}")
            return
        
        # Find all PNG files
        png_files = list(self.images_dir.glob("*.png"))
        
        if not png_files:
            logger.error(f"No PNG files found in {self.images_dir}")
            return
        
        logger.info(f"Found {len(png_files)} PNG files to process")
        
        # Process each image
        for i, image_path in enumerate(png_files, 1):
            try:
                result = self.process_single_image(image_path)
                self.extracted_data.append(result)
                
                if i % 50 == 0:  # Progress update every 50 files
                    logger.info(f"Processed {i}/{len(png_files)} files...")
                    
            except Exception as e:
                logger.error(f"Error processing {image_path.name}: {str(e)}")
                self.extracted_data.append({
                    "filename": image_path.name,
                    "work_order_id": self.extract_work_order_id("", image_path.name),
                    "service_description": None,
                    "closeout_notes": None,
                    "extraction_success": False,
                    "error": str(e)
                })
        
        # Save results
        self.save_results()
        self.print_summary()
    
    def save_results(self) -> None:
        """
        Save extracted data to JSON file
        """
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump(self.extracted_data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Results saved to {self.output_file}")
    
    def print_summary(self) -> None:
        """
        Print summary of extraction results
        """
        total = len(self.extracted_data)
        successful = sum(1 for item in self.extracted_data if item['extraction_success'])
        with_service_desc = sum(1 for item in self.extracted_data if item['service_description'])
        with_closeout = sum(1 for item in self.extracted_data if item['closeout_notes'])
        
        print("\n" + "="*50)
        print("EXTRACTION SUMMARY")
        print("="*50)
        print(f"Total images processed: {total}")
        print(f"Successful extractions: {successful} ({successful/total*100:.1f}%)")
        print(f"Images with service description: {with_service_desc}")
        print(f"Images with closeout notes: {with_closeout}")
        print(f"Results saved to: {self.output_file}")
        print("="*50)

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Extract text from work order images')
    parser.add_argument('images_dir', help='Directory containing PNG work order images')
    parser.add_argument('--output', '-o', default='extracted_work_orders.json', 
                       help='Output JSON file (default: extracted_work_orders.json)')
    parser.add_argument('--sample', '-s', type=int, 
                       help='Process only first N images for testing')
    
    args = parser.parse_args()
    
    # Validate images directory
    if not os.path.exists(args.images_dir):
        print(f"Error: Images directory '{args.images_dir}' does not exist")
        return
    
    # Create extractor
    extractor = WorkOrderTextExtractor(args.images_dir, args.output)
    
    # If sample mode, limit the files
    if args.sample:
        png_files = list(Path(args.images_dir).glob("*.png"))[:args.sample]
        logger.info(f"Sample mode: processing first {len(png_files)} files")
        
        for image_path in png_files:
            result = extractor.process_single_image(image_path)
            extractor.extracted_data.append(result)
        
        extractor.save_results()
        extractor.print_summary()
    else:
        # Process all images
        extractor.process_all_images()

if __name__ == "__main__":
    main() 