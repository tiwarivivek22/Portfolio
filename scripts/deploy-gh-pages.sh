#!/bin/bash

# Build the Next.js project with static export
npm run build

# Remove old out directory if exists
rm -rf out

# Export the static site to out directory
npx next export

# Check if gh-pages branch exists, if not create it
if git show-ref --quiet refs/heads/gh-pages; then
  echo "gh-pages branch exists"
else
  git checkout --orphan gh-pages
  git rm -rf .
  git commit --allow-empty -m "Initial gh-pages commit"
  git push origin gh-pages
  git checkout -
fi

# Deploy the contents of out directory to gh-pages branch
npx gh-pages -d out -b gh-pages

echo "Deployment to gh-pages branch completed."
