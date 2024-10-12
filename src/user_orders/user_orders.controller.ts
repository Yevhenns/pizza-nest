import { Controller, Get } from '@nestjs/common';
import { UserOrdersService } from './user_orders.service';

@Controller('api/user_orders')
export class UserOrdersController {
  constructor(private readonly productService: UserOrdersService) {}

  @Get()
  findAll() {
    return this.productService.findUserOrdersAll();
  }
}
