import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  dimension: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  promotion: boolean;

  @Prop()
  promPrice: number;

  @Prop()
  vegan: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
