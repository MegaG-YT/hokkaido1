#!/bin/bash
# Post-process Next.js static export to use relative paths
# This makes the site work in ANY subdirectory on ANY server

cd "$(dirname "$0")/out" || exit 1

echo "Making all paths relative..."

# 1. Fix the Turbopack runtime - change base path from "/_next/" to "_next/"
find . -name '*.js' -exec sed -i '' 's|"/_next/"|"_next/"|g' {} +

# 2. Fix image paths in JS bundles: "/images/" -> "images/"
find . -name '*.js' -exec sed -i '' 's|"/images/|"images/|g' {} +

# 3. Fix paths in HTML files
find . -name '*.html' -exec sed -i '' \
  -e 's|href="/_next/|href="_next/|g' \
  -e 's|src="/_next/|src="_next/|g' \
  -e 's|href="/images/|href="images/|g' \
  -e 's|src="/images/|src="images/|g' \
  -e 's|href="/favicon.ico"|href="favicon.ico"|g' \
  {} +

# 4. Fix preload/prefetch imageSrcSet in HTML
find . -name '*.html' -exec sed -i '' 's|/_next/|_next/|g' {} +

# 5. Catch remaining /images/ paths inside RSC hydration payload (JSON-escaped)
#    and inline CSS url() references. Safe because /images/ only refers to the
#    project's image assets.
find . -name '*.html' -exec sed -i '' 's|/images/|images/|g' {} +

echo "Done! All paths are now relative."
