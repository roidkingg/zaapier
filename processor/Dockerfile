FROM node:20-alpine

WORKDIR /app

# Install libssl1.1 for Prisma
RUN apk add --no-cache openssl1.1

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

# Processor is a Kafka consumer, no HTTP server
# No port exposure needed

# Start the application
CMD ["npm", "start"]