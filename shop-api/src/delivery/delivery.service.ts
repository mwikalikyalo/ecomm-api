import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery, DeliveryDocument } from './entities/delivery.schema';

@Injectable()
export class DeliveryService {

  constructor(@InjectModel(Delivery.name) private readonly deliveryModel: Model < DeliveryDocument > ) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise < DeliveryDocument > {
    const delivery = new this.deliveryModel(createDeliveryDto);
    return delivery.save();
  }

  async findAll(): Promise < DeliveryDocument[] > {
    return this.deliveryModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.deliveryModel.findById(id);
  }

  async update(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise < DeliveryDocument > {
    return this.deliveryModel.findByIdAndUpdate(id, updateDeliveryDto);
  }

  async remove(id: string) {
    return this.deliveryModel.findByIdAndRemove(id);
  }
}

