#!/bin/bash

# Configuration
IMAGE_NAME="sudvezi-directus"
GITHUB_USERNAME="maqakh"
REPO_NAME="sudvezi"
TAG="latest"
FULL_IMAGE_NAME="ghcr.io/$GITHUB_USERNAME/$REPO_NAME/$IMAGE_NAME:$TAG"

echo "🔄 Processing $IMAGE_NAME..."

# Remove all images with the same name
echo "🗑️  Removing all images with the same name..."
docker images | grep $IMAGE_NAME | awk '{print $3}' | xargs -r docker rmi -f 2>/dev/null || true

# Build the application first (adjust commands based on your project structure)
echo "🏗️  Building application code..."
# If this is in a subdirectory, cd into it first
# cd ./app-directory

# For Directus extensions or custom build
if [ -f "package.json" ]; then
  npm ci  # Clean install dependencies
  npm run build  # Build the application
  # Or for a Directus extension
  # npx directus-extension build
else
  echo "⚠️  No package.json found, skipping application build"
fi

# Build the Docker image
echo "🏗️  Building Docker image..."
docker build --no-cache --platform linux/amd64 -t $IMAGE_NAME:$TAG .

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed for $IMAGE_NAME!"
    exit 1
fi

# Tag the image for GitHub Packages
echo "🏷️  Tagging $IMAGE_NAME for GitHub Packages..."
docker tag $IMAGE_NAME:$TAG $FULL_IMAGE_NAME

# Push to GitHub Packages
echo "⬆️  Pushing $IMAGE_NAME to GitHub Packages..."
docker push $FULL_IMAGE_NAME

echo "✅ $IMAGE_NAME successfully built and pushed to GitHub Packages!"
echo "Done"