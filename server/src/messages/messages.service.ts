import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { ChatService } from 'src/chat/chat.service';
import { MessageEntity } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    private readonly chatService: ChatService,
    @InjectRepository(MessageEntity) private messageRepository: Repository<MessageEntity>
  ) {}

  async create(createMessageDto: CreateMessageDto) { // !!!!!!!!!!!
    let chat = await this.chatService.findOne(createMessageDto.chatId);
    if (!chat) {
      chat = await this.chatService.create();
    }

    const newMessage = this.messageRepository.create({
      ...createMessageDto,
      created: new Date(),
      updated: new Date(),
    });
    return await this.messageRepository.save(newMessage);
  }

  async findAll(userIdSrc: string, userIdDest: string) {
    const chatsSrc = await this.chatService.findUserChats(userIdSrc);
    const chatsDest = await this.chatService.findUserChats(userIdDest);
    if (chatsSrc.length === 0 || chatsDest.length === 0) {
      const chat = await this.chatService.create();
      await this.chatService.addChat(userIdSrc,chat.id);
      await this.chatService.addChat(userIdDest,chat.id);
    }
  }
}
