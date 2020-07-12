import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async addUser(
    @Body('email') appUserEmail: string,
    @Body('password') appUserPassword: string,
  ) {
    const checkEmail = this.usersService.findOneByEmail(appUserEmail);
    return await this.usersService.createUser(appUserEmail, appUserPassword);
  }

  // This route will require successfully passing our default auth strategy (JWT) in order
  // to access the route
  @Get('test')
  @UseGuards(AuthGuard())
  testAuthRoute() {
    return {
      message: 'You did it!',
    };
  }
}
