import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from 'src/health/health.module';
import { ProductModule } from '../product/product.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from 'src/users/users.module';
import { SupplementsModule } from 'src/supplements/supplements.module';
import { OrdersModule } from 'src/orders/orders.module';
import { AuthModule } from 'src/auth/auth.module';

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
    SupplementsModule,
    OrdersModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
