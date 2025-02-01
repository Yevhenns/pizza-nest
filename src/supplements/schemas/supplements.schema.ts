import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SupplementForCategory } from '../dto/createSupplement.dto';

export type SupplementDocument = HydratedDocument<Supplement>;

@Schema({ versionKey: false })
export class Supplement {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  vegan: boolean;

  @Prop({ required: true })
  for_category: SupplementForCategory;
}

export const SupplementSchema = SchemaFactory.createForClass(Supplement);
