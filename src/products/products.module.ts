import { ProductsUseCase } from './use-case/products.use-case';
import { ProductsEntity } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductsService, ProductsUseCase],
  controllers: [ProductsController],
})
export class ProductsModule {}
