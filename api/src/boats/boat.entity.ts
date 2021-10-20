import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BoatType } from "./boatType.entity";

@Entity()
export class Boat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => BoatType, boatType => boatType.boats)
    type: BoatType;
}
