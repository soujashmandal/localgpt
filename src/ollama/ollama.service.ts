import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OllamaService {
  private baseUrl = 'http://localhost:11434'; // Ollama default API port
  private model = process.env.MODEL || 'llama3:8b';

  async listModels() {
    const response = await axios.get(`${this.baseUrl}/api/tags`);
    return response.data;
  }

  async chat(messages: { role: string; content: string }[]) {
    const response = await axios.post(`${this.baseUrl}/api/chat`, {
      model: this.model,
      messages,
      stream: false,
    });
    return response.data;
  }
}