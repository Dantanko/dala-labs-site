#!/bin/bash

# Script to add favicon link to all HTML files in dala-labs-site repo
# Usage: Copy this script to your repo root and run: bash add-favicon-to-all-html.sh

# Find all HTML files and add favicon link after charset meta tag
for file in *.html; do
    if [ -f "$file" ]; then
        echo "Updating $file..."
        
        # Check if favicon link already exists
        if grep -q "favicon" "$file"; then
            echo "  ✓ $file already has favicon link"
        else
            # Add favicon link after <meta charset="utf-8">
            sed -i 's/<meta charset="utf-8">/<meta charset="utf-8"><link rel="icon" type="image\/x-icon" href="favicon.ico">/' "$file"
            echo "  ✓ Added favicon link to $file"
        fi
    fi
done

echo "Done! All HTML files updated with favicon link."
echo ""
echo "Next steps:"
echo "1. git add -A"
echo "2. git commit -m 'Add favicon link to all pages'"
echo "3. git push"
