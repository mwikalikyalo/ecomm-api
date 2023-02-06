import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDocument } from './entities/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
  async createUser(name: string, email: string, username: string, password:string, country:string): Promise<User> {
      return this.userModel.create({
        name,
        email,
        username,
        password,
        country
    });
  }
  async getUser(query: object ): Promise<User> {
      return this.userModel.findOne(query);
  }

  async hashPassword(password: string): Promise<any> {
    const salt = await bcrypt.genSalt(10, "b");
    return await bcrypt.hash(password, salt);
  }
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  
}
