import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService, private userController: UserController) {}
  @Post()
  registerUser(createdUser:any){
    return this.userService.registerUser(createdUser)
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
