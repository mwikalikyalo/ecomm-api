import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { HashService } from './hash.service';
import { User, UserSchema } from './users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UserService,
    HashService
  ],
  controllers: [
    UserController
  ],
  exports: [
    UserService,
    HashService
  ],
})

export class UsersModule {}
