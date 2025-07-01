# Use official Node.js image
FROM node:20-alpine

# Install PM2 globally
RUN npm install -g pm2

# Set workdir
WORKDIR /app

# Copy all code
COPY . .

# Install and build frontend
WORKDIR /app/frontend
RUN npm install --production && npm run build

# Install and build primary-backend
WORKDIR /app/primary-backend
RUN npm install --production && npm run build

# Install and build hooks
WORKDIR /app/hooks
RUN npm install --production && npm run build

# Install and build worker
WORKDIR /app/worker
RUN npm install --production && npm run build

# Install and build processor
WORKDIR /app/processor
RUN npm install --production && npm run build

# Go back to root
WORKDIR /app

# Copy PM2 ecosystem config (create this file in your root)
COPY ecosystem.config.js .

# Expose frontend port
EXPOSE 3000

# Start all services with PM2
CMD ["pm2-runtime", "ecosystem.config.js"]