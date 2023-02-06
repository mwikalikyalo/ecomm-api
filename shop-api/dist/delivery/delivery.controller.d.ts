import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { HttpService } from '@nestjs/axios';
export declare class DeliveryController {
    private readonly deliveryService;
    private readonly httpService;
    constructor(deliveryService: DeliveryService, httpService: HttpService);
    create(createDeliveryDto: CreateDeliveryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDeliveryDto: UpdateDeliveryDto): string;
    remove(id: string): string;
}
