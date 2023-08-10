import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { ChatModule } from 'src/chat/chat.module';
import { MessageEntity } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityModule } from 'src/app/security/security.module';
import { UsersModule } from 'src/app/users/users.module';

@Module({
  providers: [MessagesGateway, MessagesService],
  imports: [
    TypeOrmModule.forFeature([
      MessageEntity,
    ]),
    ChatModule,
    SecurityModule,
    UsersModule
  ]
})
export class MessagesModule {}
