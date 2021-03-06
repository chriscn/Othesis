import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BoatsController } from './boats/boats.controller';
import { SquadsController } from './squads/squads.controller';
import { MembersController } from './members/members.controller';
import { Squad } from './squads/squad.entity';
import { Member } from './members/member.entity';
import { Boat } from './boats/boat.entity';
import { BoatType } from './boats/boatType.entity';
import { AppService } from './app.service';
import { OthesisBaseEntity } from './othesis.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [OthesisBaseEntity, Squad, Member, Boat, BoatType],
    }),
  ],
  controllers: [
    AppController,
    BoatsController,
    SquadsController,
    MembersController,
  ],
  providers: [AppService]
})
export class AppModule {}
