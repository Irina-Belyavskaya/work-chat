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
}
