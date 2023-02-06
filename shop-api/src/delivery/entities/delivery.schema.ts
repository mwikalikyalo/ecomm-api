import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeliveryDocument = Delivery & Document;
@Schema()
export class Delivery {
@Prop()
  name:string;
@Prop()
  phone:number;
@Prop()
  email:string;
@Prop()
  address:string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);