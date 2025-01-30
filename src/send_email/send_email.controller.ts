import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SendEmailService } from './send_email.service';
import { createEmailBodyDto } from './dto/createEmailBody.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/api/send_email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @ApiTags('Orders')
  @ApiOperation({
    summary: 'Send email to the store owner',
    description:
      'This endpoint sends an email to the store owner via Gmail. It includes the order information in the email body.',
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendEmail(@Body() dto: createEmailBodyDto) {
    await this.sendEmailService.sendEmail(dto);
    return { success: true };
  }
}
