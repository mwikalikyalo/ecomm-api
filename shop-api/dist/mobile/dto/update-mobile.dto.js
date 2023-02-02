"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMobileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mobile_dto_1 = require("./create-mobile.dto");
class UpdateMobileDto extends (0, mapped_types_1.PartialType)(create_mobile_dto_1.CreateMobileDto) {
}
exports.UpdateMobileDto = UpdateMobileDto;
//# sourceMappingURL=update-mobile.dto.js.map