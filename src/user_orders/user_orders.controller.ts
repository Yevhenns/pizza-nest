import { Controller, Get, Query } from '@nestjs/common';
import { UserOrdersService } from './user_orders.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api/user_orders')
export class UserOrdersController {
  constructor(private readonly productService: UserOrdersService) {}

  @ApiTags('User')
  @ApiOperation({
    summary: 'Get list of orders for a specific user',
    description:
      'This endpoint retrieves a list of all orders placed by a specific user, identified by their userId.',
  })
  @Get()
  findAll(@Query('userId') userId: string) {
    return this.productService.findUserOrdersAll(userId);
  }
}
