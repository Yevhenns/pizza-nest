import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum Supplementategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
}

class SupplementDto {
  @ApiProperty({ example: "потрійне м'ясо" })
  title: string;

  @ApiProperty({ example: 60 })
  price: number;

  @ApiProperty({ example: false })
  vegan: boolean;

  @ApiProperty({ example: 'Закуски', enum: Supplementategory })
  for_category: Supplementategory;
}

export class CreateSupplementDto {
  @ApiProperty({ type: SupplementDto })
  @Type(() => SupplementDto)
  supplement: SupplementDto;
}
