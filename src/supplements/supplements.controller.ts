import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
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

  @ApiTags('Supplements')
  @ApiOperation({
    summary: 'Delete a supplement by its ID',
    description:
      'This endpoint deletes a supplement from the database based on the provided supplement ID.',
  })
  @Delete(':supplementId')
  async deleteById(
    @Param('supplementId') supplementId: string,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.deleteById(supplementId, userId);
    return { success: true };
  }
}
