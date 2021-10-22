import { OthesisBaseEntity } from 'src/othesis.entity';
import { Entity, ManyToOne } from 'typeorm';
import { BoatType } from './boatType.entity';

@Entity()
export class Boat extends OthesisBaseEntity {
  @ManyToOne(() => BoatType, (boatType) => boatType.boats)
  type: BoatType;
}
