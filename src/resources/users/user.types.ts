import { DatabaseEntity } from '../../common/database/database.type';
import { User } from './user.model';

export interface UserResponseType extends DatabaseEntity {
  name: string;
  login: string;
  toResponse? : (user: User ) => object;
}

export interface IUser extends UserResponseType{
  password?: string;
}




