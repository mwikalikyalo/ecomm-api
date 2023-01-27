import { Model } from 'mongoose';
import { UserDocument } from './users/users.schema';
export declare class AppService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getHello(): string;
}
