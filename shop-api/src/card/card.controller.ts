import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
// import JwtAuthenticationGuard from '../auth/jwt-authentication.guard';
import CreateChargeDto from './dto/createCharge.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { CardService } from './card.service';


@Controller('charge')
export default class CardController {
  constructor(private readonly cardService: CardService) {}

@Post()
  // @UseGuards(JwtAuthenticationGuard)
  async create(@Body() charge:CreateChargeDto, @Req() request: RequestWithUser ) {
    await this.cardService.charge(charge.amount, charge.paymentMethodId, request.user.stripeCustomerId);
  }
}
