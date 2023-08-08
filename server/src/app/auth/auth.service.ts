import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dtos/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { SecurityService } from '../security/security.service';
import { SignInDto } from './dtos/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly securityService: SecurityService
  ) { }

  async registration(dto: SignUpDto) {
    const user = await this.usersService.getUserByEmail(dto.email);
    if (user) {
      throw new BadRequestException('User with this email already exists');
    }
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('Invalid password');
    }

    const hashPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.usersService.createUser({
      ...dto, password: hashPassword
    })
    const payload = { email: newUser.email, id: newUser.id };

    return this.securityService.generateToken(payload);
  }

  async signIn(dto: SignInDto) {
    const user = await this.usersService.getUserByEmail(dto.email);
    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }
    const payload = { email: user.email, id: user.id };
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (isMatch) {
      return this.securityService.generateToken(payload);
    }
    throw new BadRequestException('Invalid email or password');
  }
}
