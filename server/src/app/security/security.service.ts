import { Injectable } from '@nestjs/common';
import { UserSessionDto } from './dtos/userSession.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SecurityService {
  constructor(
    private jwtService: JwtService
  ) {}

  async generateToken(user: UserSessionDto) {
    const payload = UserSessionDto.fromPayload(user);

    return {
      access_token: this.jwtService.sign(payload),
      expired_at: (Number(new Date().getTime()) + 3600000)
    }
  }

  // public async checkJwtToken(authHeader: string) {
  //   if (!authHeader) {
  //     return false;
  //   }
  //   const bearer = authHeader.split(' ')[0];
  //   const token = authHeader.split(' ')[1];

  //   if(bearer !== 'Bearer' || !token) {
  //     return false;
  //   }
    
  //   const decodedUser = UserSessionDto.fromPayload(this.jwtService.verify(token));

  //   const userEntity = await this.usersService.getUserById(decodedUser.id)
  //   if (!userEntity) {
  //     return false;
  //   }
  //   return true;
  // }
}
