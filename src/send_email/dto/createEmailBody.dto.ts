import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class CustomerInfoDto {
  @ApiProperty({ example: 'Лесі Українки 12/32', required: false })
  address: string;

  @ApiProperty({ example: 'На 18:30', required: false })
  comment: string;

  @ApiProperty({ example: 'Андрій' })
  name: string;

  @ApiProperty({ example: '0938882211' })
  number: string;
}

class OrderItemDto {
  @ApiProperty({ example: 'Нагетси' })
  title: string;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: [] })
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

class OrderSumDto {
  @ApiProperty({ example: 775 })
  orderSum: number;
}

export class CreateEmailBodyDto {
  @ApiProperty({ type: CustomerInfoDto })
  @Type(() => CustomerInfoDto)
  customerInfo: CustomerInfoDto;

  @ApiProperty({ type: OrderDto })
  @Type(() => OrderDto)
  order: OrderDto;

  @ApiProperty({ type: OrderSumDto })
  @Type(() => OrderSumDto)
  orderSum: OrderSumDto;
}
