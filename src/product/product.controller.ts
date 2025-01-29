import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiTags('Products')
  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
