FROM node:20-slim

WORKDIR /app

# Install libssl1.1 for Prisma


# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose port
EXPOSE 3002

# Start the application
CMD ["npm", "start"]