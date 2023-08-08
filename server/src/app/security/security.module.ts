import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '1h'
      }
    }),
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  providers: [ 
    SecurityService
  ], 
  exports: [
    JwtModule,
    SecurityService
  ]
})
export class SecurityModule {}
