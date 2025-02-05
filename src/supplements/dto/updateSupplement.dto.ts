import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  CreateSupplementDto,
  supplementExamples,
  SupplementForCategory,
} from './createSupplement.dto';

const { for_category, price, title, vegan } = supplementExamples;

export class UpdateSupplementDto extends PartialType(CreateSupplementDto) {
  @ApiPropertyOptional(title)
  title?: string;

  @ApiPropertyOptional(price)
  price?: number;

  @ApiPropertyOptional(vegan)
  vegan?: boolean;

  @ApiPropertyOptional(for_category)
  for_category?: SupplementForCategory;
}
