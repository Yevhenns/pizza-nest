import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum Category {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
  DRINKS = 'Напої',
}

class ProductDto {
  @ApiProperty({ example: '5 сирів' })
  title: string;

  @ApiProperty({ example: 'Смачна піца 5 сирів' })
  description: string;

  @ApiProperty({ example: '50см' })
  dimension: string;

  @ApiProperty({ example: 400 })
  price: number;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dyka4vajb/image/upload/v1698576734/hatamagnata/pizzas/cmzbifr7ssgugxtgnrtn.png',
  })
  photo: string;

  @ApiProperty({ example: 'Піца', enum: Category })
  category: Category;

  @ApiProperty({ example: false })
  promotion: boolean;

  @ApiProperty({ example: 380 })
  promPrice: number;

  @ApiProperty({ example: false, required: false })
  vegan: boolean;
}

export class CreateProductDto {
  @ApiProperty({ type: ProductDto })
  @Type(() => ProductDto)
  product: ProductDto;
}
