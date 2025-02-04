import { ApiProperty } from '@nestjs/swagger';
import { examples, products } from './examples';

export enum ProductCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
  DRINKS = 'Напої',
}

const {
  category,
  description,
  dimension,
  photo,
  price,
  promotion,
  title,
  promPrice,
  vegan,
} = examples;

export class CreateProductDto {
  @ApiProperty(title)
  title: string;

  @ApiProperty(description)
  description: string;

  @ApiProperty(dimension)
  dimension: string;

  @ApiProperty(price)
  price: number;

  @ApiProperty(photo)
  photo: string;

  @ApiProperty(category)
  category: ProductCategory;

  @ApiProperty(promotion)
  promotion: boolean;

  @ApiProperty(promPrice)
  promPrice: number;

  @ApiProperty(vegan)
  vegan: boolean;
}

export class CreateProductListDto {
  @ApiProperty({
    type: [CreateProductDto],
    example: products,
  })
  products: CreateProductDto[];
}
