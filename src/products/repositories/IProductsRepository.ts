/* eslint-disable prettier/prettier */
import { ProductsEntity } from './../products.entity';

interface IProductsRepository {
  create(products: ProductsEntity): Partial<ProductsEntity>;
}

export { IProductsRepository }