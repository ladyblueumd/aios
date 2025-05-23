#!/usr/bin/env python3
"""
Integrate extracted text data with existing work orders
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Optional
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class WorkOrderIntegrator:
    def __init__(self, 
                 existing_work_orders_file: str = "public/data/processed-work-orders.json",
                 extracted_text_file: str = "extracted_work_orders.json",
                 output_file: str = "public/data/enhanced-work-orders.json"):
        self.existing_file = existing_work_orders_file
        self.extracted_file = extracted_text_file
        self.output_file = output_file
        
    def load_data(self) -> tuple:
        """Load existing work orders and extracted text data"""
        
        # Load existing work orders
        try:
            with open(self.existing_file, 'r', encoding='utf-8') as f:
                existing_orders = json.load(f)
            logger.info(f"Loaded {len(existing_orders)} existing work orders")
        except FileNotFoundError:
            logger.error(f"Existing work orders file not found: {self.existing_file}")
            return None, None
        except json.JSONDecodeError:
            logger.error(f"Invalid JSON in existing work orders file: {self.existing_file}")
            return None, None
            
        # Load extracted text data
        try:
            with open(self.extracted_file, 'r', encoding='utf-8') as f:
                extracted_data = json.load(f)
            logger.info(f"Loaded {len(extracted_data)} extracted text records")
        except FileNotFoundError:
            logger.error(f"Extracted text file not found: {self.extracted_file}")
            return None, None
        except json.JSONDecodeError:
            logger.error(f"Invalid JSON in extracted text file: {self.extracted_file}")
            return None, None
            
        return existing_orders, extracted_data
    
    def normalize_id(self, id_str: str) -> str:
        """Normalize work order ID for matching"""
        if not id_str:
            return ""
        
        # Extract just the numeric part
        numeric_match = re.search(r'(\d+)', str(id_str))
        if numeric_match:
            return numeric_match.group(1)
        
        return str(id_str).strip()
    
    def match_extracted_to_existing(self, existing_orders: List[Dict], extracted_data: List[Dict]) -> Dict:
        """
        Match extracted text data to existing work orders by ID
        """
        # Create lookup dictionary for extracted data
        extracted_lookup = {}
        for item in extracted_data:
            if item.get('work_order_id'):
                normalized_id = self.normalize_id(item['work_order_id'])
                extracted_lookup[normalized_id] = item
        
        logger.info(f"Created lookup for {len(extracted_lookup)} extracted records")
        
        # Match and enhance existing orders
        enhanced_orders = []
        matched_count = 0
        
        for order in existing_orders:
            enhanced_order = order.copy()
            
            # Try to match by work order ID
            order_id = self.normalize_id(order.get('id', ''))
            
            if order_id in extracted_lookup:
                extracted_item = extracted_lookup[order_id]
                
                # Add service description if available
                if extracted_item.get('service_description'):
                    enhanced_order['serviceDescription'] = extracted_item['service_description']
                
                # Add closeout notes if available
                if extracted_item.get('closeout_notes'):
                    enhanced_order['closeoutNotes'] = extracted_item['closeout_notes']
                
                # Add extraction metadata
                enhanced_order['textExtractionSource'] = extracted_item['filename']
                enhanced_order['textExtractionSuccess'] = extracted_item.get('extraction_success', False)
                
                matched_count += 1
                logger.debug(f"Matched order {order_id} with extracted data from {extracted_item['filename']}")
            
            enhanced_orders.append(enhanced_order)
        
        logger.info(f"Successfully matched {matched_count} work orders with extracted text")
        
        return {
            'enhanced_orders': enhanced_orders,
            'match_statistics': {
                'total_existing_orders': len(existing_orders),
                'total_extracted_records': len(extracted_data),
                'successful_matches': matched_count,
                'match_rate': matched_count / len(existing_orders) * 100 if existing_orders else 0
            }
        }
    
    def save_enhanced_data(self, enhanced_data: Dict) -> None:
        """Save the enhanced work orders to file"""
        
        # Ensure output directory exists
        output_path = Path(self.output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Save enhanced work orders
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump(enhanced_data['enhanced_orders'], f, indent=2, ensure_ascii=False)
        
        # Save statistics
        stats_file = self.output_file.replace('.json', '_statistics.json')
        with open(stats_file, 'w', encoding='utf-8') as f:
            json.dump(enhanced_data['match_statistics'], f, indent=2)
        
        logger.info(f"Enhanced work orders saved to: {self.output_file}")
        logger.info(f"Statistics saved to: {stats_file}")
    
    def print_integration_summary(self, stats: Dict) -> None:
        """Print summary of integration results"""
        print("\n" + "="*60)
        print("WORK ORDER INTEGRATION SUMMARY")
        print("="*60)
        print(f"Total existing work orders: {stats['total_existing_orders']}")
        print(f"Total extracted text records: {stats['total_extracted_records']}")
        print(f"Successful matches: {stats['successful_matches']}")
        print(f"Match rate: {stats['match_rate']:.1f}%")
        print(f"Enhanced data saved to: {self.output_file}")
        print("="*60)
    
    def run_integration(self) -> bool:
        """Run the complete integration process"""
        
        # Load data
        existing_orders, extracted_data = self.load_data()
        if existing_orders is None or extracted_data is None:
            return False
        
        # Match and enhance
        enhanced_data = self.match_extracted_to_existing(existing_orders, extracted_data)
        
        # Save results
        self.save_enhanced_data(enhanced_data)
        
        # Print summary
        self.print_integration_summary(enhanced_data['match_statistics'])
        
        return True

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Integrate extracted text with existing work orders')
    parser.add_argument('--existing', '-e', 
                       default='public/data/processed-work-orders.json',
                       help='Path to existing work orders JSON file')
    parser.add_argument('--extracted', '-x', 
                       default='extracted_work_orders.json',
                       help='Path to extracted text JSON file')
    parser.add_argument('--output', '-o', 
                       default='public/data/enhanced-work-orders.json',
                       help='Output path for enhanced work orders')
    
    args = parser.parse_args()
    
    # Create integrator
    integrator = WorkOrderIntegrator(
        existing_work_orders_file=args.existing,
        extracted_text_file=args.extracted,
        output_file=args.output
    )
    
    # Run integration
    success = integrator.run_integration()
    
    if success:
        print("\n✅ Integration completed successfully!")
        print(f"Your enhanced work orders are now available at: {args.output}")
    else:
        print("\n❌ Integration failed. Please check the error messages above.")

if __name__ == "__main__":
    main() 