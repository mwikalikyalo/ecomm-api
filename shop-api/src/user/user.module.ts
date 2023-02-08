import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from './entities/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { CardService } from 'src/card/card.service';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Module({
  imports: [
  //   MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  // ],
    TypeOrmModule.forFeature([UserRepository, User]),
    MongooseModule.forFeature([{ name: "user", schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, CardService, ConfigService],
  exports: [UserService],
})

export class UserModule {}
