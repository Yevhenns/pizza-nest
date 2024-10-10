import { Module } from '@nestjs/common';
import { UserOrdersController } from './user_orders.controller';
import { UserOrdersService } from './user_orders.service';

@Module({
  controllers: [UserOrdersController],
  providers: [UserOrdersService],
})
export class UserOrdersModule {}
