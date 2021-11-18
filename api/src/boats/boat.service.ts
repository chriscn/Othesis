import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Boat } from "./boat.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Boat)
        private boatRepository: Repository<Boat>,
    ) {}

    async findAll(): Promise<Boat[]> {
        return this.boatRepository.find();
    }
}
