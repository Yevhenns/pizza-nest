import { ApiProperty } from '@nestjs/swagger';

export class createEmailBodyDto {
  @ApiProperty({
    example: {
      address: 'Лесі Українки 12/32',
      comment: 'На 18:30',
      delivery: true,
      name: 'Андрій',
      number: '0938882211',
    },
  })
  customerInfo: {
    address: string;
    comment: string;
    delivery: boolean;
    name: string;
    number: string;
  };
  @ApiProperty({
    example: {
      optionsTitles: ['Сирний бортик'],
      quantity: 2,
      title: 'Карбонара',
    },
  })
  order: {
    optionsTitles: string[];
    quantity: number;
    title: string;
  };
  @ApiProperty({ example: 250 })
  orderSum: number;
}
