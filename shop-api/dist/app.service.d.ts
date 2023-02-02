import { Model } from 'mongoose';
import { UserDocument } from './user/entities/user.entity';
export declare class AppService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getHello(): string;
}
