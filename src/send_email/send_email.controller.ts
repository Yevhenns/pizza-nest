import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SendEmailService } from './send_email.service';
import { createEmailBodyDto } from './dto/createEmailBody.dto';

@Controller('/api/send_email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendEmail(@Body() dto: createEmailBodyDto) {
    await this.sendEmailService.sendEmail(dto);
    return { success: true };
  }
}
