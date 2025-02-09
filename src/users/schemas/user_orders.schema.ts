import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<UserOrder>;

@Schema()
export class CustomerInfo {
  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  comment: string;

  @Prop({ required: false })
  delivery: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  userId: string;
}

@Schema()
export class Ordered {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: false })
  optionsTitles: false;
}

@Schema()
export class UserOrder {
  @Prop({ required: true })
  customerInfo: CustomerInfo;

  @Prop({ required: true })
  order: Ordered[];

  @Prop({ required: true })
  orderSum: number;
}

export const UserOrderSchema = SchemaFactory.createForClass(UserOrder);
