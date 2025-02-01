import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiTags('Products')
  @ApiOperation({
    summary: 'Get a list of all products',
    description:
      'This endpoint returns a list of all available products in the store.',
  })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiTags('Products')
  @ApiOperation({
    summary: 'Delete a product by its ID',
    description:
      'This endpoint deletes a product from the database based on the provided product ID.',
  })
  @Delete(':productId')
  async deleteById(
    @Param('productId') productId: string,
    @Query('userId') userId: string,
  ) {
    await this.productService.deleteById(productId, userId);
    return { success: true };
  }
}
