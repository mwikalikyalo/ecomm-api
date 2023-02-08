import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

@Prop()
  _id: String;
@Prop()
  name:string;
@Prop()
  email:string;
@Prop()
  username:string;
@Prop()
  password:string;
@Prop()
  country:string;
@Prop()
  stripeCustomerId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);