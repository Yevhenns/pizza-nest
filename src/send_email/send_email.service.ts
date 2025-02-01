import { Injectable, Logger } from '@nestjs/common';
import * as handlebars from 'handlebars';
import * as nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { CreateEmailBodyDto } from './dto/createEmailBody.dto';

@Injectable()
export class SendEmailService {
  private readonly logger = new Logger(SendEmailService.name);

  private readonly templatePath = join(__dirname, 'views/index.hbs');

  private loadTemplate(): string {
    try {
      return readFileSync(this.templatePath, 'utf8');
    } catch (error) {
      this.logger.error('Error reading template file', error);
      throw error;
    }
  }

  async sendEmail(dto: CreateEmailBodyDto) {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    if (!email || !password) {
      this.logger.error('Email or password environment variables are not set');
      return;
    }

    const templateSource = this.loadTemplate();
    const template = handlebars.compile(templateSource);

    const { customerInfo, order, orderSum } = dto;
    const { name, number, comment, address } = customerInfo;

    const htmlBody = template({
      name,
      number,
      address,
      comment,
      orderSum,
      order,
    });

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    try {
      await transport.verify();
      await transport.sendMail({
        from: email,
        to: email,
        subject: 'Замовлення',
        html: htmlBody,
      });
    } catch (error) {
      this.logger.error('Error sending email', error);
    }
  }
}
