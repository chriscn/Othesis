import { OthesisBaseEntity } from 'src/othesis.entity';
import { Squad } from 'src/squads/squad.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member extends OthesisBaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'date',
  })
  dob: string;

  @Column()
  email: string;

  @Column()
  password: string; // hash of member's password

  @Column()
  phone: string;

  @ManyToOne(() => Squad, (squad) => squad.members)
  squad: Squad;
}
