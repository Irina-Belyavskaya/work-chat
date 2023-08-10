import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtPermissionsGuard } from '../security/guards/jwt-permission.guard';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService
  ) {}

  @Get()
  @UseGuards(JwtPermissionsGuard)
  async getUsers() {
    return await this.userService.getUsers();
  }
}
