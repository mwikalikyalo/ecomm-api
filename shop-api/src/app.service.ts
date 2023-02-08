import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user/entities/user.entity';
import { UserDocument } from './user/entities/user.schema';

@Injectable()
export class AppService {
  constructor(
  @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  getHello(): string {
        return 'Hello World!';

  }
}

