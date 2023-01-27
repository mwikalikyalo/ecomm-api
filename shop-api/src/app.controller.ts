import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService: UserService) {}
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':/username')
  getUserByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
}
}
