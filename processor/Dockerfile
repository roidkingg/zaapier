FROM node:20-alpine

# Install OpenSSL and other required dependencies
RUN apk add --no-cache openssl libssl1.1

WORKDIR /app

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
EXPOSE 3000

# Processor is a Kafka consumer, no HTTP server
# No port exposure needed

# Start the application
CMD ["npm", "start"]