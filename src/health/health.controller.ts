import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiTags('Health check')
  @Get()
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
