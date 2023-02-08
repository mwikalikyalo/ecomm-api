import { Repository, EntityRepository } from 'typeorm';
import { User } from './entities/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { CardService } from 'src/card/card.service';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  cardService: CardService;

  async createUser(createUserDto: CreateUserDto, ): Promise<User> {
    const stripeCustomer = await this.cardService.createCustomer(
      createUserDto.name,
      createUserDto.email,
    );
    
    const user = this.create({
      ...createUserDto,
      stripeCustomerId: stripeCustomer.id,
    });
    await this.save(user);
    return user;
  }
}