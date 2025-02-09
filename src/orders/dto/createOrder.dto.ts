import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

class CustomerInfoDto {
  @ApiProperty({
    example: 'Лесі Українки 12/32',
    minLength: 3,
    maxLength: 50,
    required: false,
  })
  @IsString()
  @MinLength(3, { message: 'address min length: 3' })
  @MaxLength(50, { message: 'address max length: 50' })
  address: string;

  @ApiProperty({
    example: 'На 18:30',
    minLength: 3,
    maxLength: 50,
    required: false,
  })
  @IsString()
  @MinLength(3, { message: 'comment min length: 3' })
  @MaxLength(50, { message: 'comment max length: 50' })
  comment: string;

  @ApiProperty({
    example: 'Андрій',
    minLength: 2,
    maxLength: 20,
    required: true,
  })
  @IsString()
  @MinLength(2, { message: 'name min length: 2' })
  @MaxLength(20, { message: 'name max length: 20' })
  name: string;

  @ApiProperty({
    example: '+380935345345',
    description: 'number must match +380XXXXXXXXX',
    required: true,
  })
  @IsString()
  @Matches(/^\+380\d{9}$/, {
    message: 'number must match +380XXXXXXXXX',
  })
  number: string;
}

class OrderItemDto {
  @ApiProperty({
    example: 'Нагетси',
    minLength: 3,
    maxLength: 20,
    required: true,
  })
  @IsString()
  @MinLength(3, { message: 'title min length: 3' })
  @MaxLength(20, { message: 'title max length: 20' })
  title: string;

  @ApiProperty({ example: 1, minimum: 1, maximum: 100, required: true })
  @IsNumber({}, { message: 'price must be number' })
  @Min(1, { message: 'price must be more than 0' })
  @Max(100, { message: 'price must be less or equal 100' })
  quantity: number;

  @ApiProperty({
    example: ['Бортик з сулугуні'],
    description: 'optionsTitles must be an array',
    required: true,
    type: [String],
  })
  @IsArray({ message: 'optionsTitles must be an array' })
  @ArrayMinSize(0)
  @IsString({ each: true, message: 'Each optionTitle must be a string' })
  optionsTitles: string[] | [];
}

export class OrderDto {
  @ApiProperty({
    example: [
      { title: 'Нагетси', quantity: 1, optionsTitles: [] },
      { title: 'З лососем', quantity: 2, optionsTitles: [] },
      {
        title: 'Барбекю',
        quantity: 1,
        optionsTitles: ["Подвійне м'ясо", 'Бортик з крем сиром'],
      },
    ],
    type: [OrderItemDto],
  })
  order: OrderItemDto[];
}

export class CreateOrderDto {
  @ApiProperty({ type: CustomerInfoDto })
  @Type(() => CustomerInfoDto)
  customerInfo: CustomerInfoDto;

  @ApiProperty({
    example: [
      { title: 'Нагетси', quantity: 1, optionsTitles: [] },
      { title: 'З лососем', quantity: 2, optionsTitles: [] },
      {
        title: 'Барбекю',
        quantity: 1,
        optionsTitles: ["Подвійне м'ясо", 'Бортик з крем сиром'],
      },
    ],
    type: [OrderItemDto],
  })
  order: OrderItemDto[];

  @ApiProperty({ example: 775, minimum: 1, maximum: 10000, required: true })
  @IsNumber({}, { message: 'price must be number' })
  @Min(1, { message: 'price must be more than 0' })
  @Max(10000, { message: 'price must be less or equal 10000' })
  orderSum: number;
}
