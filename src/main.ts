import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionFilter } from './all-exception/all-exception.filter';
import { AllResponseInterceptor } from './all-response/all-response.interface';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('商城接口')
    .setDescription('商城服务器端接口 1.0')
    .build();
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('cvnert', app, document);
  // 解决跨域
  app.enableCors({ origin: true, credentials: true });
  // 全局错误拦截
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  // 全局响应设置
  app.useGlobalInterceptors(new AllResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
