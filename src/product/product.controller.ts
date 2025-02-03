import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './dto/createProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // GET
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

  // POST
  @ApiTags('Products')
  @ApiOperation({
    summary: 'Create a new product',
    description: 'This endpoint creates a new product.',
  })
  @Post()
  async createProduct(
    @Body() dto: CreateProductDto,
    @Query('userId') userId: string,
  ) {
    await this.productService.createProduct(dto, userId);
    return { success: true };
  }

  // PATCH
  @ApiTags('Products')
  @ApiOperation({
    summary: 'Update an existing product',
    description: 'This endpoint updates an existing product.',
  })
  @Patch(':productId')
  async updateProduct(
    @Body() dto: UpdateProductDto,
    @Param('productId') productId: string,
    @Query('userId') userId: string,
  ) {
    await this.productService.updateProduct(productId, dto, userId);
    return { success: true };
  }

  // DELETE
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
