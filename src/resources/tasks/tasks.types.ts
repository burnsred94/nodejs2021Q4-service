import { DatabaseEntity } from '../../common/database/database.type';

export interface ITask extends DatabaseEntity{
  title : string,
  order : number,
  description : string,
  userId : null,
  boardId : string,
  columnId : null
}