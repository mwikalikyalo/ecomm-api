import {  Controller } from '@nestjs/common';
// import { AppService } from './app.service';
// import { UserService } from './users/users.service';

@Controller()
export class AppController {
  constructor() {}
  // Body, Get, Param, Post
  // private readonly appService: AppService, private userService: UserService
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('username')
  // getUserByUsername(@Param('username') username: string) {
  //   return this.userService.getUserByUsername(username);
  // }

  // @Post()
  // registerUser(@Body() createdUser:any): Promise<void>{
  //   return this.userService.registerUser(createdUser)
  // }
}
