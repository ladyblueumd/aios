#!/bin/bash

# Clean Next.js Build Script
echo "🧹 Cleaning Next.js build artifacts..."

# Remove Next.js cache
rm -rf .next
echo "✅ Removed .next directory"

# Clear node_modules if needed (optional)
# rm -rf node_modules
# echo "✅ Removed node_modules"

# Clear npm cache
npm cache clean --force
echo "✅ Cleared npm cache"

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
npm install

# Try building again
echo "🏗️ Starting fresh build..."
npm run build
