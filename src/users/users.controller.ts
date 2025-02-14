import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly productService: UsersService) {}

  @ApiTags('Users')
  @Get(':userId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get list of orders for a specific user',
    description:
      'This endpoint retrieves a list of all orders placed by a specific user, identified by their userId.',
  })
  findAll(@Param('userId') userId: string) {
    return this.productService.findUserOrdersAll(userId);
  }
}
