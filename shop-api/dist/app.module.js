"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const delivery_module_1 = require("./delivery/delivery.module");
const card_module_1 = require("./card/card.module");
const mobile_module_1 = require("./mobile/mobile.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./user/entities/user.entity");
const user_schema_1 = require("./user/entities/user.schema");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/shop-api'),
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_schema_1.UserSchema }]),
            user_module_1.UserModule,
            delivery_module_1.DeliveryModule,
            card_module_1.CardModule,
            mobile_module_1.MobileModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mongodb',
                })
            }),
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    STRIPE_SECRET_KEY: Joi.string(),
                    STRIPE_CURRENCY: Joi.string(),
                    FRONTEND_URL: Joi.string(),
                })
            }),
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
            config_1.ConfigService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map