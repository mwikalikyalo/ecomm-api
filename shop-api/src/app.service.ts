import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users/users.schema';

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

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
