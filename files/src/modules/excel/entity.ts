import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  product_id: string; 

  @Column({ type: 'varchar' })
  product: string;

  @Column({ type: 'text' })
  description: string;

  @Column('float')
  price: number;

  @Column('float')
  listPrice: number;

  @Column('varchar', { array: true })
  images: string[];

  @Column('int')
  stock: number;

  @Column()
  handle: string;

  @Column()
  barcode: string;

  @Column()
  sku: string;

  @Column()
  grams: string;

}

