import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from 'src/health/health.module';
import { ProductModule } from '../product/product.module';
import { SendEmailModule } from 'src/send-email/send-email.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      },
    }),
    HealthModule,
    ProductModule,
    SendEmailModule,
  ],
})
export class AppModule {}
