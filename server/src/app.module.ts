import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/typeOrm.config';
import { UsersModule } from './app/users/users.module';
import { SecurityModule } from './app/security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }), 
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UsersModule,
    SecurityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
