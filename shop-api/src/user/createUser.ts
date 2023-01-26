import { User } from './user.entity';

export class CreateUser extends User {
  save() {
    throw new Error('Method not implemented.');
  }
}