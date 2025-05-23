#!/bin/bash

echo "🔧 Setting up OCR Text Extraction for Work Orders"
echo "=================================================="

# Check if we're on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script is designed for macOS. Please install Tesseract manually on your system."
    exit 1
fi

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "❌ Homebrew not found. Please install Homebrew first:"
    echo "   /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    exit 1
fi

echo "✅ Homebrew found"

# Install Tesseract OCR
echo "📦 Installing Tesseract OCR..."
if ! command -v tesseract &> /dev/null; then
    brew install tesseract
    echo "✅ Tesseract OCR installed"
else
    echo "✅ Tesseract OCR already installed"
fi

# Check Tesseract version
echo "📋 Tesseract version: $(tesseract --version | head -n1)"

# Install Python dependencies
echo "🐍 Installing Python dependencies..."
if command -v python3 &> /dev/null; then
    python3 -m pip install -r requirements_ocr.txt
    echo "✅ Python dependencies installed"
else
    echo "❌ Python 3 not found. Please install Python 3 first."
    exit 1
fi

echo ""
echo "🎉 Setup complete! You can now extract text from your work order images."
echo ""
echo "📖 Usage Examples:"
echo "=================="
echo ""
echo "1. Test with a few images first:"
echo "   python3 extract_work_order_text.py /path/to/your/images --sample 5"
echo ""
echo "2. Process all images:"
echo "   python3 extract_work_order_text.py /path/to/your/images"
echo ""
echo "3. Integrate with existing work orders:"
echo "   python3 integrate_extracted_text.py"
echo ""
echo "📝 Notes:"
echo "========="
echo "• Make sure your PNG files are in a single directory"
echo "• The script will create 'extracted_work_orders.json' with the results"
echo "• Check the extraction summary to see how many were successful"
echo "• You may need to adjust OCR patterns based on your specific image format" 