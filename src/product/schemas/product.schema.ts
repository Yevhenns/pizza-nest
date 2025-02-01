import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductCategory } from 'src/@types/types';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ versionKey: false })
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
  category: ProductCategory;

  @Prop({ required: true })
  promotion: boolean;

  @Prop({ required: true })
  promPrice: number;

  @Prop({ required: true })
  vegan: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
