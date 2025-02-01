import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiTags('Health check')
  @ApiOperation({
    summary: 'Check the health of the server',
    description:
      'This endpoint checks if the server is running and responds with a success message.',
  })
  @Get()
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
