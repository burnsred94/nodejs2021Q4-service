import { DatabaseEntity } from '../../common/database/database.type';

export interface IBoard extends DatabaseEntity{
  title : string
  columns : { columnId : string, title : string, order: number}[]
}