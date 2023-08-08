import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>
  ) {}
  
  async getUsers() {
    return await this.userRepository.find();
  }

  async getUserById(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: {email} });
  }

  async createUser(dto: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...dto,
      created: new Date(),
      updated: new Date(),
    });
    return await this.userRepository.save(newUser);
  }

}
