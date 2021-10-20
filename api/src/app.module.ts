import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoatsController } from './boats/boats.controller';
import { SquadsController } from './squads/squads.controller';
import { MembersController } from './members/members.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, BoatsController, SquadsController, MembersController],
  providers: [AppService],
})
export class AppModule {}
