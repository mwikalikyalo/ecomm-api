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
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/entities/user.schema");
const local_strategy_1 = require("../auth/local.strategy");
const config_1 = require("@nestjs/config");
const card_module_1 = require("../card/card.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, card_module_1.CardModule, passport_1.PassportModule, config_1.ConfigModule, jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '60s' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: "user", schema: user_schema_1.UserSchema }]),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, config_1.ConfigService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map