# Build stage
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the app
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM nginx:alpine

# Add non-root user
RUN adduser -D -u 1001 appuser && \
    chown -R appuser:appuser /usr/share/nginx/html && \
    chown -R appuser:appuser /var/cache/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appuser /var/run/nginx.pid && \
    mkdir -p /var/log/nginx && \
    chown -R appuser:appuser /var/log/nginx && \
    chmod -R 755 /var/log/nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Set correct permissions for the app files
RUN chown -R appuser:appuser /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER appuser

# Expose port 80
EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]