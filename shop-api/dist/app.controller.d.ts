import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    private userController;
    constructor(appService: AppService, userService: UserService, userController: UserController);
    registerUser(createdUser: any): Promise<void>;
}
