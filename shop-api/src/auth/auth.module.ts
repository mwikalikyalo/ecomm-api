import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../user/entities/user.schema";
import { LocalStrategy } from '../auth/local.strategy';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CardModule } from "src/card/card.module";

@Module({
  imports: [UserModule, CardModule, PassportModule, ConfigModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' }, 
  }), 
  MongooseModule.forFeature([{ name: "user", schema: UserSchema }]),
],  
  providers: [AuthService, LocalStrategy, ConfigService],
  controllers: [AuthController],
})

export class AuthModule { }