import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(name: string, email: string, username: string, password: string, country: string): Promise<User | Error>;
}
