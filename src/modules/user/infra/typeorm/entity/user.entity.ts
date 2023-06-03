import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ primary: true, type: 'uuid' })
  id?: string;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  city: string;
  @Column({ type: 'varchar', length: 255 })
  country: string;
  @Column({ type: 'varchar', length: 255 })
  favorite_sport: string;
  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;
}
