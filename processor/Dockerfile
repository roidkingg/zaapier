FROM node:20-alpine

# Install OpenSSL and other required dependencies
RUN apk add --no-cache openssl libssl3

# Install wait-for-it script
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

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

# Start the application with wait-for-it
CMD ["/wait-for-it.sh", "kafka:9092", "--", "npm", "start"]