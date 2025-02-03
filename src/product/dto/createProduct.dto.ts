import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export enum ProductCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
  DRINKS = 'Напої',
}

const examples = {
  title: { example: '5 сирів' },
  description: { example: 'Смачна піца 5 сирів' },
  dimension: { example: '50см' },
  price: { example: 400 },
  photo: {
    example:
      'https://res.cloudinary.com/dyka4vajb/image/upload/v1698576734/hatamagnata/pizzas/cmzbifr7ssgugxtgnrtn.png',
  },
  category: { example: 'Піца', enum: ProductCategory },
  promotion: { example: false },
  promPrice: { example: 380 },
  vegan: { example: false },
};

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

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional(title)
  title?: string;

  @ApiPropertyOptional(description)
  description?: string;

  @ApiPropertyOptional(dimension)
  dimension?: string;

  @ApiPropertyOptional(price)
  price?: number;

  @ApiPropertyOptional(photo)
  photo?: string;

  @ApiPropertyOptional(category)
  category: ProductCategory;

  @ApiPropertyOptional(promotion)
  promotion?: boolean;

  @ApiPropertyOptional(promPrice)
  promPrice?: number;

  @ApiPropertyOptional(vegan)
  vegan?: boolean;
}
