FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Processor is a Kafka consumer, no HTTP server
# No port exposure needed

# Start the application
CMD ["npm", "start"] 