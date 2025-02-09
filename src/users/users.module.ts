import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserOrder, UserOrderSchema } from './schemas/user_orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserOrder.name, schema: UserOrderSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
