FROM directus/directus:11.7.2

# Copy extensions and uploads (if you want them built into the image)
COPY extensions /directus/extensions
COPY uploads /directus/uploads

# Expose the default Directus port
EXPOSE 8055

# Entrypoint is handled by the base image 