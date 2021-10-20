import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRespository: Repository<Member>,
  ) {}

  findAll(): Promise<Member[]> {
    return this.memberRespository.find();
  }

  findOne(id: string): Promise<Member> {
    return this.memberRespository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.memberRespository.delete(id);
  }
}
