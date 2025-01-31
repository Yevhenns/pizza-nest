import { Controller, Get } from '@nestjs/common';
import { SupplementsService } from './supplements.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api/supplements')
export class SupplementsController {
  constructor(private readonly supplementService: SupplementsService) {}

  @ApiTags('Supplements')
  @ApiOperation({
    summary: 'Get a list of all supplements',
    description:
      'This endpoint returns a list of all available supplements in the store.',
  })
  @Get()
  findAll() {
    return this.supplementService.findAll();
  }
}
