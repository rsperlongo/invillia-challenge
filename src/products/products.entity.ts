/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  title: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  prod_company: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  intensity: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  category: string;
}
