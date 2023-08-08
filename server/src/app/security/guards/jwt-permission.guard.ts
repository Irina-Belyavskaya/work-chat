import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

// ============ DTOs ================
import { UserSessionDto } from '../dtos/userSession.dto';

// ============ DTOs ================
import { UserDto } from '../../users/dtos/user.dto';

// ============ Services ================
import { SecurityService } from '../security.service';
import { UsersService } from 'src/app/users/users.service';

@Injectable()
export class JwtPermissionsGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly securityService: SecurityService,
    private readonly userService: UsersService
  ) {}

  async canActivate(context: ExecutionContext) {
    try {      
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if(bearer !== 'Bearer' || !token) {
        throw new HttpException({message: 'User unauthorized'}, HttpStatus.UNAUTHORIZED);
      }
      const decodedUser = UserSessionDto.fromPayload(this.jwtService.verify(token));
      const userEntity = await this.userService.getUserById(decodedUser.id)
      if (!userEntity) {
        throw new HttpException({message:'User unauthorized'}, HttpStatus.UNAUTHORIZED);
      }
      req.user = decodedUser;
      return true;
    } catch (error) {
      throw new HttpException({message: 'User unauthorized'}, HttpStatus.UNAUTHORIZED);
    }
  }
}