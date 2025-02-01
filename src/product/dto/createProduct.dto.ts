import { ApiProperty } from '@nestjs/swagger';

export enum ProductCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
  DRINKS = 'Напої',
}

export class CreateProductDto {
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

  @ApiProperty({ example: 'Піца', enum: ProductCategory })
  category: ProductCategory;

  @ApiProperty({ example: false })
  promotion: boolean;

  @ApiProperty({ example: 380 })
  promPrice: number;

  @ApiProperty({ example: false })
  vegan: boolean;
}
