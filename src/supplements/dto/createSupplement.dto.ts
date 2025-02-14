import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export enum SupplementForCategory {
  PIZZA = 'Піца',
  APPETIZERS = 'Закуски',
}

export const supplementExamples = {
  title: { example: "потрійне м'ясо" },
  price: { example: 60 },
  vegan: { example: false },
  for_category: { example: 'Закуски', enum: SupplementForCategory },
};

const { for_category, price, title, vegan } = supplementExamples;

export class CreateSupplementDto {
  @ApiProperty({ ...title, minLength: 3, maxLength: 20, required: true })
  @IsString()
  @MinLength(3, { message: 'title min length: 3' })
  @MaxLength(20, { message: 'title max length: 20' })
  title: string;

  @ApiProperty({ ...price, minimum: 1, maximum: 1000, required: true })
  @IsNumber({}, { message: 'price must be number' })
  @Min(1, { message: 'price must be more than 0' })
  @Max(10000, { message: 'price must be less or equal 1000' })
  price: number;

  @ApiProperty({
    ...vegan,
    description: 'vegan must be true or false',
    required: true,
  })
  @IsBoolean({
    message: 'vegan must be true or false',
  })
  vegan: boolean;

  @ApiProperty({
    ...for_category,
    description: 'for_category must be one of: Піца, Закуски',
    enum: SupplementForCategory,
    required: true,
  })
  @IsEnum(SupplementForCategory, {
    message: 'for_category must be one of the allowed categories',
  })
  for_category: SupplementForCategory;
}
