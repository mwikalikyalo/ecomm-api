import { CreateMobileDto } from './dto/create-mobile.dto';
import { UpdateMobileDto } from './dto/update-mobile.dto';
export declare class MobileService {
    create(createMobileDto: CreateMobileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMobileDto: UpdateMobileDto): string;
    remove(id: number): string;
}
