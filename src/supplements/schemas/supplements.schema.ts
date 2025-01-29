import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SupplementDocument = HydratedDocument<Supplement>;

@Schema()
export class Supplement {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  vegan: boolean;
}

export const SupplementSchema = SchemaFactory.createForClass(Supplement);
