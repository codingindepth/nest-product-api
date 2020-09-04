import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataInterceptor } from './utils/data.interceptor';

@Module({
  imports: [ ProductsModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide:APP_INTERCEPTOR,
    useClass:DataInterceptor
  }
],
})
export class AppModule {}
