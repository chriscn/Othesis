import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BoatType } from "./boatType.entity";

@Entity()
export class Boat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => BoatType, boatType => boatType.boats)
    type: BoatType;
}