import { Boat } from 'src/boats/boat.entity';
import { Member } from 'src/members/member.entity';
import { OthesisBaseEntity } from 'src/othesis.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Squad extends OthesisBaseEntity{
  @Column()
  name: string;

  @OneToOne(() => Member)
  @JoinColumn()
  captian: Member;

  @OneToMany(() => Member, (member) => member.squad)
  members: Member[];

  @ManyToMany(() => Boat)
  @JoinTable()
  boats: Boat[];
}
