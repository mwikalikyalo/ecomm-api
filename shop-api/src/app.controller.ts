import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

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
