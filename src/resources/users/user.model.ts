import { v4 as uuid4 } from 'uuid'
import { IUser } from './user.types';


export class User implements IUser {
  id: string;
  name : string;
  login : string;
  password : string;
  toResponse : (user: User) => object;
  constructor({
    id  = uuid4(),
    name = "Name",
    login = "login",
    password = "PAS77@WORD"
              }) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user
    return  { id, name, login}
  }
}
