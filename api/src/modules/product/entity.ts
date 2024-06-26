import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import CategoryEntity from '../category/entity';

@Entity('products')
export default class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  product_id: string;

  @Column({ type: 'varchar' })
  product: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  price: number;

  @Column()
  listPrice: number;

  @Column('varchar', { array: true, default: [] })
  images: string[];

  @Column()
  stock: number;

  @Column()
  handle: string;

  @Column()
  barcode: string;

  @Column()
  sku: string;

  @Column()
  grams: string;

  @Column({ default: 0 })
  product_view: number;

  @ManyToOne(() => CategoryEntity, category => category.products, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

}