import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';

@Module({
  providers: [ChatService],
  exports: [ChatService],
  imports: [
    TypeOrmModule.forFeature([
      ChatEntity,
    ]),
  ]
})
export class ChatModule {}
