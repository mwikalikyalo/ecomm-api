import { User } from '../users/users.entity';

export class CreateUser extends User {
  save() {
    throw new Error('Method not implemented.');
  }
}