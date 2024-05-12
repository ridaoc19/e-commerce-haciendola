import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductEntity from '../product/entity';

@Entity('categories')
export default class CategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  category_id: string;

  @Column({ type: 'varchar' })
  category: string;

  @OneToMany(() => ProductEntity, product => product.category, { cascade: ['remove'], onDelete: 'CASCADE' })
  products: ProductEntity[];
}
