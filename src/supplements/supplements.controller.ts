import { Controller, Get } from '@nestjs/common';
import { SupplementsService } from './supplements.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/supplements')
export class SupplementsController {
  constructor(private readonly supplementService: SupplementsService) {}

  @ApiTags('Products')
  @Get()
  findAll() {
    return this.supplementService.findAll();
  }
}
