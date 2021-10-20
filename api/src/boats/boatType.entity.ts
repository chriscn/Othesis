import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Boat } from './boat.entity';

@Entity()
export class BoatType {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  seats: number;

  @OneToMany(() => Boat, (boat) => boat.type)
  boats: Boat[];
}
