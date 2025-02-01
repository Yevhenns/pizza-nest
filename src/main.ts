import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://nostrra-pizzza.vercel.app'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Pizza API Documentation')
    .setVersion('1.0')
    .setDescription('https://pizza-nest.onrender.com/api')
    .addServer(
      'https://pizza-nest.onrender.com/api',
      'Production server (on Render)',
    )
    .addServer('http://localhost:3000', 'Development server (localhost)')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
