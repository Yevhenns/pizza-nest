import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { examples } from './examples';
import { CreateProductDto, ProductCategory } from './createProduct.dto';

const {
  category,
  description,
  dimension,
  photo,
  price,
  promotion,
  title,
  promPrice,
  vegan,
} = examples;

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional(title)
  title?: string;

  @ApiPropertyOptional(description)
  description?: string;

  @ApiPropertyOptional(dimension)
  dimension?: string;

  @ApiPropertyOptional(price)
  price?: number;

  @ApiPropertyOptional(photo)
  photo?: string;

  @ApiPropertyOptional(category)
  category: ProductCategory;

  @ApiPropertyOptional(promotion)
  promotion?: boolean;

  @ApiPropertyOptional(promPrice)
  promPrice?: number;

  @ApiPropertyOptional(vegan)
  vegan?: boolean;
}
