import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(name: string, email: string, username: string, password: string, country: string): Promise<User>;
    getUser(query: object): Promise<User>;
    hashPassword(password: string): Promise<any>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
