import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/users.schema';
import { UserService } from './users/users.service';
import { HashService } from './users/hash.service';
import { UserController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forRoot('mongodb+srv://mwikalikyalo:ch1ch1sam234@cluster0.es6xz7b.mongodb.net/?retryWrites=true&w=majority/auth'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    AppService,
    UserService,
    HashService,
  ],
})
export class AppModule {}
