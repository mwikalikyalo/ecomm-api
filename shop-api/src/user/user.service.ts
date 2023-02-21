import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.schema';
import * as bcrypt from 'bcrypt';
import { UserDocument } from './entities/user.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CardService } from 'src/card/card.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>, private readonly cardService: CardService, 
  @InjectRepository(User) private usersRepository: Repository<User> ) { }

  async createUser(name: string, email: string, username: string, password:string, country:string): Promise<User> {
    return this.userModel.create({
        name,
        email,
        username,
        password,
        country
    }); 
  }

  async getUser(query: object ): Promise<User> {
      return this.userModel.findOne(query);
  }

  async makePayments(users: CreateUserDto) {
    const stripeCustomer = await this.cardService.createCustomer(users.name, users.email);
    const newUser = await this.usersRepository.create({
      ...users,
      stripeCustomerId: stripeCustomer.id
    });
    await this.usersRepository.save(newUser);
  return newUser;
  }

  async hashPassword(password: string): Promise<any> {
    const salt = await bcrypt.genSalt(10, "b");
    return await bcrypt.hash(password, salt);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise < UserDocument > {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
 
}
