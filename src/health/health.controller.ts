import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('/api/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
