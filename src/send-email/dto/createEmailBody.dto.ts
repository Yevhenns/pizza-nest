export class createEmailBodyDto {
  customerInfo: {
    address: string;
    comment: string;
    delivery: boolean;
    name: string;
    number: string;
  };
  order: {
    optionsTitles: string[];
    quantity: number;
    title: string;
  };
  orderSum: number;
}
