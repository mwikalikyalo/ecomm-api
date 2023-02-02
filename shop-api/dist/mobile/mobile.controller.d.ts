import { MobileService } from './mobile.service';
import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';
export declare class MobileController {
    private readonly mobileService;
    constructor(mobileService: MobileService);
    create(createMobileDto: CreateMobileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMobileDto: UpdateMobileDto): string;
    remove(id: string): string;
}
