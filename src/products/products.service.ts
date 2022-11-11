import { ProductsEntity } from './products.entity';
import { ProductsUseCase } from './use-case/products.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private useCaseProducts: ProductsUseCase) {}

  async createProducts(products: ProductsEntity): Promise<any> {
    return this.useCaseProducts.createProducts(products);
  }
}
