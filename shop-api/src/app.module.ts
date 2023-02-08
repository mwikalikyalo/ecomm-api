import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryModule } from './delivery/delivery.module';
import { CardModule } from './card/card.module';
import { MobileModule } from './mobile/mobile.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { UserSchema } from './user/entities/user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/shop-api'), 
    UserModule,
    DeliveryModule,
    CardModule,
    MobileModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongodb',
      }) 
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        STRIPE_SECRET_KEY: Joi.string(),
        STRIPE_CURRENCY: Joi.string(),
        FRONTEND_URL: Joi.string(),
      })
    }),    
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    ConfigService
  ],
})
export class AppModule {}
