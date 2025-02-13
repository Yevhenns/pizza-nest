import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3001', 'https://nostrra-pizzza.vercel.app'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Pizza API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .setDescription('https://pizza-nest.onrender.com/api/v1')
    .addServer(
      'https://pizza-nest.onrender.com/api/v1',
      'Production server (on Render)',
    )
    .addServer('http://localhost:3001/api/v1', 'Development server (localhost)')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
