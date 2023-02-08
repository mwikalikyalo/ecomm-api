import CreateChargeDto from './dto/createCharge.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { CardService } from './card.service';
export default class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    create(charge: CreateChargeDto, request: RequestWithUser): Promise<void>;
}
