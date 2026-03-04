import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('v1/chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post('completions')
    async chat(@Body() body: { messages: { role: string; content: string }[] }) {
        const result = await this.chatService.chat(body.messages);

        return {
            id: 'localgpt',
            object: 'chat.completion',
            choices: [
                {
                    index: 0,
                    message: result.message || result,
                    finish_reason: 'stop',
                },
            ],
        };
    }
}
