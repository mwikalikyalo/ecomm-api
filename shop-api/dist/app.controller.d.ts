import { AppService } from './app.service';
import { UserService } from './users/users.service';
export declare class AppController {
    private readonly appService;
    private userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
    getUserByUsername(username: string): Promise<import("./users/users.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
