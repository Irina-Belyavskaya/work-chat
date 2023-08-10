import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/typeOrm.config';
import { UsersModule } from './app/users/users.module';
import { SecurityModule } from './app/security/security.module';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }), 
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UsersModule,
    SecurityModule,
    ChatModule,
    MessagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
