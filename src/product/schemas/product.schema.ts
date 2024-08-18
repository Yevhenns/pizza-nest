import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  dimension: string;

  @Prop()
  price: number;

  @Prop()
  photo: string;

  @Prop()
  category: string;

  @Prop()
  promotion: boolean;

  @Prop()
  promPrice: number;

  @Prop()
  vegan: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
