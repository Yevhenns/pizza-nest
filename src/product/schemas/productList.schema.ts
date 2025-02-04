import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';

@Schema({ versionKey: false })
export class ProductList {
  @Prop({ type: [ProductSchema], required: true })
  products: Product[];
}

export const ProductListSchema = SchemaFactory.createForClass(ProductList);
