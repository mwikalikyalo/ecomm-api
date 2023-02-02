import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private jwtService: JwtService) { }
    
    async validateUser(username: string, password: string): Promise<User> {
        try {
          const user = await this.usersService.getUser({ username });
          console.log('User object:', user);  
          if (!user) return null;
      
          const passwordValid = await bcrypt.compare(password, user.password);
          console.log('Password valid:', passwordValid); 
          if (!passwordValid) {
            throw new NotAcceptableException('Incorrect password');
          }
          return user;
        } catch (err) {
          console.error('Error in validateUser:', err); 
          return null;
        }
    }

    async login(user: User) {
        try {
          const payload = { username: user.username, sub: user.name };
          console.log('Payload:', payload);
          const accessToken = this.jwtService.sign(payload);
          console.log('Access token:', accessToken); 
          return {
            access_token: accessToken,
          };
        } catch (err) {
          console.error('Error in login:', err); 
          throw err;
        }
    }
}