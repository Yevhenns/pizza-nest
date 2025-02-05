import { ApiProperty } from '@nestjs/swagger';
import { productExamples, products } from './examples';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

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
} = productExamples;

export class CreateProductDto {
  @ApiProperty({ ...title, minLength: 3, maxLength: 20, required: true })
  @IsString()
  @MinLength(3, { message: 'title min length: 3' })
  @MaxLength(20, { message: 'title max length: 20' })
  title: string;

  @ApiProperty({ ...description, minLength: 3, maxLength: 50, required: true })
  @IsString()
  @MinLength(3, { message: 'description min length: 3' })
  @MaxLength(50, { message: 'description max length: 50' })
  description: string;

  @ApiProperty({ ...dimension, minLength: 2, maxLength: 10, required: true })
  @IsString()
  @MinLength(3, { message: 'dimension min length: 3' })
  @MaxLength(50, { message: 'dimension max length: 50' })
  dimension: string;

  @ApiProperty({ ...price, minimum: 1, maximum: 1000, required: true })
  @IsNumber({}, { message: 'price must be number' })
  @Min(1, { message: 'price must be more than 0' })
  @Max(1000, { message: 'price must be less or equal 1000' })
  price: number;

  @ApiProperty({ ...photo, description: 'photo must be URL', required: true })
  @IsUrl({}, { message: 'photo must be URL' })
  photo: string;

  @ApiProperty({
    ...category,
    description: 'category must be one of: Піца, Закуски, Напої',
    enum: ProductCategory,
    required: true,
  })
  @IsEnum(ProductCategory, {
    message: 'category must be one of: Піца, Закуски, Напої',
  })
  category: ProductCategory;

  @ApiProperty({
    ...promotion,
    description: 'promotion must be true or false',
    required: true,
  })
  @IsBoolean({
    message: 'promotion must be true or false',
  })
  promotion: boolean;

  @ApiProperty({ ...promPrice, minimum: 1, maximum: 1000, required: true })
  @IsNumber({}, { message: 'promPrice must be number' })
  @Min(1, { message: 'promPrice must be more than 0' })
  @Max(10000, { message: 'promPrice must be less or equal 1000' })
  promPrice: number;

  @ApiProperty({
    ...vegan,
    description: 'vegan must be true or false',
    required: true,
  })
  @IsBoolean({
    message: 'vegan must be true or false',
  })
  vegan: boolean;
}

export class CreateProductListDto {
  @ApiProperty({
    type: [CreateProductDto],
    example: products,
  })
  products: CreateProductDto[];
}
