#!/bin/bash

# Configuration
IMAGE_NAME="sudvezi-backend"
GITHUB_USERNAME="maqakh"
REPO_NAME="sudvezi"
TAG="latest"
FULL_IMAGE_NAME="ghcr.io/$GITHUB_USERNAME/$REPO_NAME/$IMAGE_NAME:$TAG"

echo "🔄 Processing $IMAGE_NAME..."

# Remove all images with the same name
echo "🗑️  Removing all images with the same name..."
docker images | grep $IMAGE_NAME | awk '{print $3}' | xargs -r docker rmi -f 2>/dev/null || true

# Build the image
echo "🏗️  Building $IMAGE_NAME..."
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
docker push  $FULL_IMAGE_NAME

echo "✅ $IMAGE_NAME successfully built and pushed to GitHub Packages!"