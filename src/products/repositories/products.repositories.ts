/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { ProductsEntity } from '../products.entity';
import { IProductsRepository } from './IProductsRepository';

export class ProductsRepository implements IProductsRepository {
    constructor(private productRepo: Repository<ProductsEntity>) {}
    
    create(products: ProductsEntity) {
        return this.productRepo.create(products);
    }
}