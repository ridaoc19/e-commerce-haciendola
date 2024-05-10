import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class ProductEntity {
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
