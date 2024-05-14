import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('files')
export default class FilesEntity {
  @PrimaryGeneratedColumn("uuid")
  file_id: string;

  @Column({ type: 'varchar' })
  entity: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  typeFile: string;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'varchar' })
  fileId: string;

  @Column({ type: 'boolean', default: false })
  selected: boolean;
}

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

  @ManyToOne(() => CategoryEntity, category => category.products, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}



@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  category_id: string;

  @Column({ type: 'varchar' })
  category: string;

  @OneToMany(() => ProductEntity, product => product.category, { cascade: ['remove'], onDelete: 'CASCADE' })
  products: ProductEntity[];
}


