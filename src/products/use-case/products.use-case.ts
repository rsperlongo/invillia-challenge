/* eslint-disable prettier/prettier */
import { ProductsEntity } from './../products.entity';
import { IProductsRepository } from '../repositories/IProductsRepository';

export class ProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async getProducts(products: ProductsEntity): Promise<any> {
    return this.productsRepository.create(products);
  }
}
