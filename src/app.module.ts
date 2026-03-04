import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ChatModule } from './chat/chat.module';
import { OllamaService } from './ollama/ollama.service';

@Module({
  imports: [HealthModule, ChatModule],
  providers: [OllamaService],
})
export class AppModule { }
