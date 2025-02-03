import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export enum SupplementForCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
}

const examples = {
  title: { example: "потрійне м'ясо" },
  price: { example: 60 },
  vegan: { example: false },
  for_category: { example: 'Закуски', enum: SupplementForCategory },
};

const { for_category, price, title, vegan } = examples;

export class CreateSupplementDto {
  @ApiProperty(title)
  title: string;

  @ApiProperty(price)
  price: number;

  @ApiProperty(vegan)
  vegan: boolean;

  @ApiProperty(for_category)
  for_category: SupplementForCategory;
}

export class UpdateSupplementDto extends PartialType(CreateSupplementDto) {
  @ApiPropertyOptional(title)
  title: string;

  @ApiPropertyOptional(price)
  price: number;

  @ApiPropertyOptional(vegan)
  vegan: boolean;

  @ApiPropertyOptional(for_category)
  for_category: SupplementForCategory;
}
