import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SecurityModule } from '../security/security.module';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
    SecurityModule
  ],
  controllers: [UsersController]
})
export class UsersModule {}
