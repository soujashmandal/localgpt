# Base Node.js image
FROM node:20

# Install required packages (curl + zstd)
RUN apt-get update && \
    apt-get install -y curl zstd && \
    rm -rf /var/lib/apt/lists/*

# Install Ollama
RUN curl -fsSL https://ollama.com/install.sh | sh

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy source code
COPY . .

# Expose NestJS port
EXPOSE 3000

# Entrypoint
ENTRYPOINT ["sh", "entrypoint.sh"]
