import { Controller, Get, Query } from '@nestjs/common';
import { UserOrdersService } from './user_orders.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/user_orders')
export class UserOrdersController {
  constructor(private readonly productService: UserOrdersService) {}

  @ApiTags('User')
  @Get()
  findAll(@Query('userId') userId: string) {
    return this.productService.findUserOrdersAll(userId);
  }
}
