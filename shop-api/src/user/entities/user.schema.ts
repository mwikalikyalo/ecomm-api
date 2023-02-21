import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
@Prop()
  public _id: String;
@Prop()
  public name:string;
@Prop()
  public email:string;
@Prop()
  public username:string;
@Prop()
@Exclude()
  public password:string;
@Prop()
  public country:string;
@Prop()
  public stripeCustomerId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);