import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/sign-in.dto';
import { JwtPermissionsGuard } from '../security/guards/jwt-permission.guard';
import { User } from '../users/decorators/user.decorator';
import { UserSessionDto } from '../security/dtos/userSession.dto';
import { SecurityService } from '../security/security.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private securityService: SecurityService,
    private userService: UsersService
  ) { }

  @Post('sign-up')
  registration(@Body() user: SignUpDto) {
    return this.authService.registration(user);
  }

  @Post('sign-in')
  signIn(@Body() user: SignInDto) {
    return this.authService.signIn(user);
  }

  @Get('/refresh-token')
  @UseGuards(JwtPermissionsGuard)
  async refreshToken(@User() user: UserSessionDto) {
    const currentUser = await this.userService.getUserById(user.id);
    return await this.securityService.generateToken(currentUser);
  }
}
