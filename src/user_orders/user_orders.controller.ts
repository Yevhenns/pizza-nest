import { Controller, Get, Param } from '@nestjs/common';
import { UserOrdersService } from './user_orders.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user_orders')
export class UserOrdersController {
  constructor(private readonly productService: UserOrdersService) {}

  @ApiTags('Users')
  @ApiOperation({
    summary: 'Get list of orders for a specific user',
    description:
      'This endpoint retrieves a list of all orders placed by a specific user, identified by their userId.',
  })
  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.productService.findUserOrdersAll(userId);
  }
}
