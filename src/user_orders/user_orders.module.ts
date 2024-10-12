import { Module } from '@nestjs/common';
import { UserOrdersController } from './user_orders.controller';
import { UserOrdersService } from './user_orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserOrder, UserOrderSchema } from './schemas/user_orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserOrder.name, schema: UserOrderSchema },
    ]),
  ],
  controllers: [UserOrdersController],
  providers: [UserOrdersService],
})
export class UserOrdersModule {}
