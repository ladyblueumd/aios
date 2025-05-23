#!/bin/bash

# Script to find potential client/server component issues in Next.js App Router

echo "=== Searching for potential client/server component issues ==="
echo ""

echo "1. Files with onClick handlers:"
echo "--------------------------------"
grep -r "onClick" src/app --include="*.tsx" --include="*.jsx" | grep -v "node_modules"

echo ""
echo "2. Files with useState or other hooks:"
echo "--------------------------------------"
grep -r "useState\|useEffect\|useCallback\|useMemo" src/app --include="*.tsx" --include="*.jsx" | grep -v "node_modules"

echo ""
echo "3. Files WITHOUT 'use client' that have event handlers:"
echo "-------------------------------------------------------"
for file in $(find src/app -name "*.tsx" -o -name "*.jsx" | grep -v node_modules); do
    if ! grep -q "^'use client'" "$file" && grep -q "onClick\|onChange\|onSubmit" "$file"; then
        echo "$file"
    fi
done

echo ""
echo "4. Files passing icon components as props:"
echo "------------------------------------------"
grep -r "icon:" src/lib --include="*.ts" --include="*.tsx" | grep -v "node_modules"

echo ""
echo "5. All page.tsx files to check:"
echo "--------------------------------"
find src/app -name "page.tsx" | grep -v node_modules | sort

echo ""
echo "=== Analysis Complete ==="
