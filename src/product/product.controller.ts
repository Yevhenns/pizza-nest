import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateProductDto,
  CreateProductListDto,
} from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // get all
  @ApiTags('Products')
  @Get()
  @ApiOperation({
    summary: 'Get a list of all products',
    description:
      'This endpoint returns a list of all available products in the store.',
  })
  findAll() {
    return this.productService.findAll();
  }

  // add one
  @ApiTags('Products')
  @Post('create_product')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new product',
    description: 'This endpoint creates a new product.',
  })
  async createProduct(@Body() dto: CreateProductDto) {
    await this.productService.createProduct(dto);
    return { success: true };
  }

  // add list
  @ApiTags('Products')
  @Post('create_products')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a list of products',
    description: 'This endpoint creates a list of products.',
  })
  async createProductList(@Body() dto: CreateProductListDto) {
    await this.productService.createProductList(dto);
    return { success: true };
  }

  // update one
  @ApiTags('Products')
  @Patch(':productId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update an existing product',
    description: 'This endpoint updates an existing product.',
  })
  async updateProduct(
    @Body() dto: UpdateProductDto,
    @Param('productId') productId: string,
  ) {
    await this.productService.updateProduct(productId, dto);
    return { success: true };
  }

  // delete one
  @ApiTags('Products')
  @Delete(':productId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete a product by its ID',
    description:
      'This endpoint deletes a product from the database based on the provided product ID.',
  })
  async deleteById(@Param('productId') productId: string) {
    await this.productService.deleteById(productId);
    return { success: true };
  }
}
