import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/users.schema';
import { UsersModule } from './users/users.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CardModule } from './card/card.module';
import { MobileModule } from './mobile/mobile.module';

@Module({
  imports: [
    UsersModule,
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forRoot('mongodb+srv://mwikalikyalo:ch1ch1sam234@cluster0.es6xz7b.mongodb.net/?retryWrites=true&w=majority/auth'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DeliveryModule,
    CardModule,
    MobileModule,
  ],
  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}
