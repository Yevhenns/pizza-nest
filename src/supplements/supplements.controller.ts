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
import { CreateSupplementDto } from './dto/createSupplement.dto';
import { UpdateSupplementDto } from './dto/updateSupplement.dto';

@Controller('supplements')
export class SupplementsController {
  constructor(private readonly supplementService: SupplementsService) {}

  // get all
  @ApiTags('Supplements')
  @Get()
  @ApiOperation({
    summary: 'Get a list of all supplements',
    description:
      'This endpoint returns a list of all available supplements in the store.',
  })
  findAll() {
    return this.supplementService.findAll();
  }

  // add one
  @ApiTags('Supplements')
  @Post()
  @ApiOperation({
    summary: 'Create a new supplement',
    description: 'This endpoint creates a new supplement.',
  })
  async createSupplement(
    @Body() dto: CreateSupplementDto,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.createSupplement(dto, userId);
    return { success: true };
  }

  // update one
  @ApiTags('Supplements')
  @Patch(':supplementId')
  @ApiOperation({
    summary: 'Update an existing supplement',
    description: 'This endpoint updates an existing supplement.',
  })
  async updateSupplement(
    @Body() dto: UpdateSupplementDto,
    @Param('supplementId') supplementId: string,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.updateSupplement(supplementId, dto, userId);
    return { success: true };
  }

  // delete one
  @ApiTags('Supplements')
  @Delete(':supplementId')
  @ApiOperation({
    summary: 'Delete a supplement by its ID',
    description:
      'This endpoint deletes a supplement from the database based on the provided supplement ID.',
  })
  async deleteById(
    @Param('supplementId') supplementId: string,
    @Query('userId') userId: string,
  ) {
    await this.supplementService.deleteById(supplementId, userId);
    return { success: true };
  }
}
