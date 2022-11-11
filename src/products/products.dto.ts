/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProductsStatuseEnum } from './products.entity';

export class ProductsDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  tile: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  prod_company: string;

  @IsNotEmpty()
  @IsString()
  category: string;
  
  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  created_at: string;

  @IsNotEmpty()
  @IsString()
  update_at: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsEnum(ProductsStatuseEnum)
  status: ProductsStatuseEnum;

}
