/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsDateString()
  created_at: Date = new Date();

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  update_at: Date;

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  status: boolean;

}
