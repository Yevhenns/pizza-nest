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
import { SupplementsService } from './supplements.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateSupplementDto,
  UpdateSupplementDto,
} from './dto/createSupplement.dto';

@Controller('supplements')
export class SupplementsController {
  constructor(private readonly supplementService: SupplementsService) {}

  // GET
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

  // POST
  @ApiTags('Supplements')
  @ApiOperation({
    summary: 'Create a new supplement',
    description: 'This endpoint creates a new supplement.',
  })
  @Post()
  async createSupplement(
    @Body() dto: CreateSupplementDto,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.createSupplement(dto, userId);
    return { success: true };
  }

  // PATCH
  @ApiTags('Supplements')
  @ApiOperation({
    summary: 'Update an existing supplement',
    description: 'This endpoint updates an existing supplement.',
  })
  @Patch(':supplementId')
  async updateSupplement(
    @Body() dto: UpdateSupplementDto,
    @Param('supplementId') supplementId: string,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.updateSupplement(supplementId, dto, userId);
    return { success: true };
  }

  // DELETE
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
