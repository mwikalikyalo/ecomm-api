import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('/signup')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('country') country: string,
  ): Promise<User | Error> {
    try {
      const saltOrRounds = await bcrypt.genSalt(10, 'b');
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);
      const result = await this.userService.createUser(
        name,
        email,
        username,
        hashedPassword,
        country
      );
      return result;
    } catch (error) {
      return error;
    }
  }
}

