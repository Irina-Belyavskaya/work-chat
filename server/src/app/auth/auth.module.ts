import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { SecurityModule } from '../security/security.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule, 
    SecurityModule,
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    JwtModule.register({
      secret: "SECRET",
      signOptions: { expiresIn: '1h' },
    }),
  ]
})
export class AuthModule {}
