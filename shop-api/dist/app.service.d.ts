import { Model } from 'mongoose';
import { UserDocument } from './user/user.schema';
export declare class AppService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
}
