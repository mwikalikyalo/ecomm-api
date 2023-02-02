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
exports.MobileController = void 0;
const common_1 = require("@nestjs/common");
const mobile_service_1 = require("./mobile.service");
const create_mobile_dto_1 = require("./dto/create-mobile.dto");
const update_mobile_dto_1 = require("./dto/update-mobile.dto");
let MobileController = class MobileController {
    constructor(mobileService) {
        this.mobileService = mobileService;
    }
    create(createMobileDto) {
        return this.mobileService.create(createMobileDto);
    }
    findAll() {
        return this.mobileService.findAll();
    }
    findOne(id) {
        return this.mobileService.findOne(+id);
    }
    update(id, updateMobileDto) {
        return this.mobileService.update(+id, updateMobileDto);
    }
    remove(id) {
        return this.mobileService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mobile_dto_1.CreateMobileDto]),
    __metadata("design:returntype", void 0)
], MobileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MobileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MobileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mobile_dto_1.UpdateMobileDto]),
    __metadata("design:returntype", void 0)
], MobileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MobileController.prototype, "remove", null);
MobileController = __decorate([
    (0, common_1.Controller)('mobile'),
    __metadata("design:paramtypes", [mobile_service_1.MobileService])
], MobileController);
exports.MobileController = MobileController;
//# sourceMappingURL=mobile.controller.js.map