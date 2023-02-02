import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/entities/user.entity';
import { DeliveryModule } from './delivery/delivery.module';
import { CardModule } from './card/card.module';
import { MobileModule } from './mobile/mobile.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UserModule,
    DeliveryModule,
    CardModule,
    MobileModule,
    UserModule,
    AuthModule,
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    // MongooseModule.forRoot('mongodb+srv://mwikalikyalo:ch1ch1sam234@cluster0.es6xz7b.mongodb.net/?retryWrites=true&w=majority/auth'),
    MongooseModule.forRoot('mongodb://localhost/shop-api'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
   
    
  ],
  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}
