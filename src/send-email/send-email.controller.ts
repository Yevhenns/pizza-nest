import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { createEmailBodyDto } from './dto/createEmailBody.dto';

@Controller('/api/send-email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendEmail(@Body() dto: createEmailBodyDto) {
    await this.sendEmailService.sendEmail(dto);
    return { success: true };
  }
}
