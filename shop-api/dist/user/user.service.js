"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./entities/user.schema");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const card_service_1 = require("../card/card.service");
let UserService = class UserService {
    constructor(userModel, cardService, usersRepository) {
        this.userModel = userModel;
        this.cardService = cardService;
        this.usersRepository = usersRepository;
    }
    async createUser(name, email, username, password, country) {
        return this.userModel.create({
            name,
            email,
            username,
            password,
            country
        });
    }
    async getUser(query) {
        return this.userModel.findOne(query);
    }
    async create(users) {
        const stripeCustomer = await this.cardService.createCustomer(users.name, users.email);
        const newUser = await this.usersRepository.create(Object.assign(Object.assign({}, users), { stripeCustomerId: stripeCustomer.id }));
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10, "b");
        return await bcrypt.hash(password, salt);
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __param(2, (0, typeorm_1.InjectRepository)(user_schema_1.User)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        card_service_1.CardService, typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map