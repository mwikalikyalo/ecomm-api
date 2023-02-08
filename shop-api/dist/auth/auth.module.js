"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("../user/user.module");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const user_service_1 = require("../user/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/entities/user.schema");
const local_strategy_1 = require("../auth/local.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const user_schema_2 = require("../user/entities/user.schema");
const config_1 = require("@nestjs/config");
const card_service_1 = require("../card/card.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '60s' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: "user", schema: user_schema_1.UserSchema }]),
            typeorm_1.TypeOrmModule.forFeature([user_schema_2.User]),
        ],
        providers: [auth_service_1.AuthService, user_service_1.UserService, local_strategy_1.LocalStrategy, card_service_1.CardService, config_1.ConfigService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map