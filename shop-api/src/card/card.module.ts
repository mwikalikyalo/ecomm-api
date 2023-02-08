import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import  CardController  from './card.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [CardController],
  providers: [CardService, ConfigService]
})

export class CardModule {}
