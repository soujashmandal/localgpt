## LocalGPT – Docker Usage

This project exposes a simple `/v1/chat/completions` endpoint (OpenAI-style) and is designed to be run via Docker.

### Run the container

```bash
docker run -d \
  -p 3000:3000 \
  -v localgpt-ollama:/root/.ollama \
  soujashmandal/localgpt
```

### Verify the API is running

Once the container is up, you can send a test request:

```bash
curl -X POST http://localhost:3000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello from Docker"}]}'
```

### Example response

You should see a JSON response similar to:

```json
{
  "id": "localgpt",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello from within a Docker container! How's life inside the container treating you?"
      },
      "finish_reason": "stop"
    }
  ]
}
```