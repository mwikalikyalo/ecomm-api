import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(users: User): Promise<{
        access_token: string;
    } | {
        statusCode: number;
        message: string;
    }>;
}
