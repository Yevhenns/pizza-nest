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
    example: [
      { title: 'Нагетси', quantity: 1, optionsTitles: [] },
      { title: 'З лососем', quantity: 2, optionsTitles: [] },
      {
        title: 'Барбекю',
        quantity: 1,
        optionsTitles: ["Подвійне м'ясо", 'Бортик з крем сиром'],
      },
    ],
  })
  order: {
    optionsTitles: string[];
    quantity: number;
    title: string;
  }[];
  @ApiProperty({ example: 775 })
  orderSum: number;
}
