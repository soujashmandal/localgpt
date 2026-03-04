#!/bin/sh

echo "🚀 Starting Ollama..."
ollama serve &

echo "⏳ Waiting for Ollama to start..."
sleep 5

MODEL=${MODEL:-llama3:8b}
echo "📦 Pulling model $MODEL"
ollama pull $MODEL

echo "🔥 Starting NestJS API..."
npm run start:prod
