import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly OrdersService: OrdersService) {}

  @ApiTags('Orders')
  @Post()
  @ApiOperation({
    summary: 'Send email to the store owner',
    description:
      'This endpoint sends an email to the store owner via Gmail. It includes the order information in the email body.',
  })
  async sendEmail(@Body() dto: CreateOrderDto) {
    await this.OrdersService.sendEmail(dto);
    return { success: true };
  }
}
