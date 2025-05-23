#!/bin/bash
# Force install all dependencies for Vercel build

echo "=== Installing all dependencies ==="
npm install --force

echo "=== Verifying TypeScript installation ==="
npx tsc --version || echo "TypeScript not found!"

echo "=== Running build ==="
npm run build
