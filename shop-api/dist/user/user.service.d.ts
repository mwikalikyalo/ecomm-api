import { Model } from 'mongoose';
import { User } from './entities/user.schema';
import { UserDocument } from './entities/user.schema';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CardService } from 'src/card/card.service';
export declare class UserService {
    private readonly userModel;
    private cardService;
    private usersRepository;
    constructor(userModel: Model<UserDocument>, cardService: CardService, usersRepository: Repository<User>);
    createUser(name: string, email: string, username: string, password: string, country: string): Promise<User>;
    getUser(query: object): Promise<User>;
    create(users: CreateUserDto): Promise<User>;
    hashPassword(password: string): Promise<any>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
