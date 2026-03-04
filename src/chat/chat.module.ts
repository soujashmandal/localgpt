import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { OllamaModule } from '../ollama/ollama.module';

@Module({
  imports: [OllamaModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule { }
