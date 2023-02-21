/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { User } from './entities/user.schema';
import { UserDocument } from './entities/user.schema';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CardService } from 'src/card/card.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly cardService;
    private usersRepository;
    constructor(userModel: Model<UserDocument>, cardService: CardService, usersRepository: Repository<User>);
    createUser(name: string, email: string, username: string, password: string, country: string): Promise<User>;
    getUser(query: object): Promise<User>;
    makePayments(users: CreateUserDto): Promise<User>;
    hashPassword(password: string): Promise<any>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument>;
    remove(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
