import { Injectable } from '@nestjs/common';
import { OllamaService } from '../ollama/ollama.service';

@Injectable()
export class ChatService {
    constructor(private readonly ollamaService: OllamaService) { }

    async chat(messages: { role: string; content: string }[]) {
        return this.ollamaService.chat(messages);
    }
}
