import { Injectable,BadRequestException } from '@nestjs/common';
import { CreateUser } from './createUser';
import { InjectModel } from '@nestjs/mongoose';
import {  Model } from 'mongoose';
import { HashService } from './hash.service';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model < UserDocument > , private hashService: HashService) {}
  async getUserByUsername(username: string) {
    return this.userModel.findOne({
        username
      })
      .exec();
  }

  async registerUser(createUser: CreateUser) {
    // validate DTO
    const createdUser = new this.userModel(createUser);
    // check if user exists
    const user = await this.getUserByUsername(createdUser.username);
    if (user) {
      throw new BadRequestException();
    }
    // Hash Password
    createUser.password = await this.hashService.hashPassword(createUser.password);
    return createUser.save();
  }
}