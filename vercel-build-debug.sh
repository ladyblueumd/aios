#!/bin/bash

# Vercel Build Debug Script
echo "=== Vercel Build Debug Script ==="
echo "Running on: $(uname -s)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo ""

echo "=== Checking Directory Structure ==="
echo "Current directory: $(pwd)"
echo ""

echo "=== Source directory structure ==="
if [ -d "src" ]; then
    echo "src/ directory exists"
    ls -la src/
    echo ""
    
    if [ -d "src/components" ]; then
        echo "src/components/ directory exists"
        ls -la src/components/
    else
        echo "ERROR: src/components/ directory not found!"
    fi
    echo ""
    
    if [ -d "src/lib" ]; then
        echo "src/lib/ directory exists"
        ls -la src/lib/
        
        if [ -d "src/lib/hooks" ]; then
            echo "src/lib/hooks/ directory exists"
            ls -la src/lib/hooks/
        else
            echo "ERROR: src/lib/hooks/ directory not found!"
        fi
    else
        echo "ERROR: src/lib/ directory not found!"
    fi
else
    echo "ERROR: src/ directory not found!"
fi

echo ""
echo "=== TypeScript Configuration ==="
if [ -f "tsconfig.json" ]; then
    echo "tsconfig.json exists"
    cat tsconfig.json | grep -A 5 -B 5 "paths"
else
    echo "ERROR: tsconfig.json not found!"
fi

echo ""
echo "=== Next.js Configuration ==="
if [ -f "next.config.js" ]; then
    echo "next.config.js exists"
    head -20 next.config.js
else
    echo "ERROR: next.config.js not found!"
fi

echo ""
echo "=== Running Build ==="
npm run build
