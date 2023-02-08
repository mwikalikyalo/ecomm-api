import { Repository } from 'typeorm';
import { User } from './entities/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { CardService } from 'src/card/card.service';
export declare class UserRepository extends Repository<User> {
    cardService: CardService;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
