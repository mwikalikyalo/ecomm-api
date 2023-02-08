import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from "src/user/user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../user/entities/user.schema";
import { LocalStrategy } from '../auth/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../user/entities/user.schema";
import { ConfigService } from "@nestjs/config";
import { CardService } from "src/card/card.service";

@Module({
  imports: [UserModule, PassportModule, 
    JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' }, }), 
  MongooseModule.forFeature([{ name: "user", schema: UserSchema }]),
  TypeOrmModule.forFeature([User]),
],  
  providers: [AuthService, UserService, LocalStrategy, CardService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule { }