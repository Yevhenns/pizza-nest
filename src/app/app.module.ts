import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from 'src/health/health.module';
import { ProductModule } from '../product/product.module';
import { SendEmailModule } from 'src/send-email/send-email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    HealthModule,
    ProductModule,
    SendEmailModule,
  ],
})
export class AppModule {}
