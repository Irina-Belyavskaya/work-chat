import { Injectable } from '@nestjs/common';
import { ChatEntity } from './entities/chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersChatsEntity } from './entities/chat-users.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UsersChatsEntity) private userChatsRepository: Repository<UsersChatsEntity>
  ) {}

  async create() {
    const newChat = this.chatRepository.create({
      created: new Date(),
      updated: new Date(),
    });
    return await this.chatRepository.save(newChat);
  }

  async addChat(userId: string, chatId: string) {
    const newChat = this.userChatsRepository.create({
      userId,
      chatId,
      created: new Date(),
      updated: new Date(),
    });
    return await this.chatRepository.save(newChat);
  }

  async findAll() {
    return await this.chatRepository.find();
  }

  async findOne(id: string) {
    return await this.chatRepository.findOne({ where: { id } })
  }

  async findUserChats(userId: string) {
    return await this.userChatsRepository.find({ where: { userId } })
  }
}
