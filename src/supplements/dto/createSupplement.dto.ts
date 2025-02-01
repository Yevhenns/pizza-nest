import { ApiProperty } from '@nestjs/swagger';

export enum SupplementForCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
}

export class CreateSupplementDto {
  @ApiProperty({ example: "потрійне м'ясо" })
  title: string;

  @ApiProperty({ example: 60 })
  price: number;

  @ApiProperty({ example: false })
  vegan: boolean;

  @ApiProperty({ example: 'Закуски', enum: SupplementForCategory })
  for_category: SupplementForCategory;
}
