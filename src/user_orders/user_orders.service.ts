import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserOrder } from './schemas/user_orders.schema';

@Injectable()
export class UserOrdersService {
  constructor(
    @InjectModel(UserOrder.name) private userProductModel: Model<UserOrder>,
  ) {}

  async findUserOrdersAll(userId: string): Promise<UserOrder[]> {
    return this.userProductModel.find({ userId }).exec();
  }
}
