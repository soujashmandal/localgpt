echo "🚀 Starting Ollama..."
ollama serve &
echo "⏳ Waiting for Ollama to start..."
sleep 10 
MODEL=${MODEL:-llama3:8b}
if ! ollama list | grep -q "$MODEL"; then
  echo "📦 Pulling model $MODEL..."
  ollama pull $MODEL
else
  echo "📦 Model $MODEL already exists, skipping pull."
fi
echo "🔥 Starting NestJS API..."
npm run start:prod
