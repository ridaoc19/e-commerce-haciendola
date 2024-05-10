import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  verified: boolean;

  @Column({ default: true })
  verifiedEmail: boolean;

  @Column({ default: 'visitant' })
  roles: "super" | "admin" | "edit" | "visitant";

  @Column({ nullable: true })
  addresses: string;
}

