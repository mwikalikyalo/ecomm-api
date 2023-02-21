import { Controller, Request, UnauthorizedException, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @UseGuards(AuthGuard('local'))
    
    @Get('/login')
    async login(@Request() users:User) {
        try {
            const user = await this.authService.validateUser( users.username, users.password);
            console.log('Validated user:', user); 
            if (!user) {
              return { statusCode: 401, message: 'Invalid credentials' };
            }
            const loginResult = await this.authService.login(user);
            console.log('Login result:', loginResult); 
          return loginResult;
        } catch (err) {
          console.log(err)
          if (err instanceof UnauthorizedException) {
            return { statusCode: 401, message: err.message };
          }
            console.error('Error in login endpoint:', err); 
            return { statusCode: 500, message: 'Internal Server Error' };
          }
      }
}
