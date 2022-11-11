import { ProductsEntity } from './products.entity';
import { ProductsService } from './products.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProducts(@Body() product: ProductsEntity): Promise<any> {
    return this.productsService.createProducts(product);
  }
}
