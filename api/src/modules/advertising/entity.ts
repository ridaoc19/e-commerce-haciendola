import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('advertising')
export default class AdvertisingEntity {
  @PrimaryGeneratedColumn('uuid')
  advertising_id: string;

  @Column()
  page: string;

  @Column()
  location: string;

  @Column()
  title: string;

  @Column()
  redirect: string;

  @Column()
  text: string;

  @Column()
  image_desktop: string;

  @Column()
  image_tablet: string;

  @Column()
  image_phone: string;
}