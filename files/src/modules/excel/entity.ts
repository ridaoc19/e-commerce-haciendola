import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class ProductEntity {
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

  @ManyToOne(() => CategoryEntity, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

}


@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  category_id: string;

  @Column({ type: 'varchar' })
  category: string;

  @OneToMany(() => ProductEntity, product => product.category, { cascade: ['remove', 'recover'] })
  products: ProductEntity[];
}
