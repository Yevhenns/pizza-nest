import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
