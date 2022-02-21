import { v4 as uuid } from 'uuid'
import { ITask } from './tasks.types'


export class Task implements ITask{
  id : string
  title : string
  order : number
  description : string
  userId : null
  boardId : string
  columnId : null
  constructor({
    id = uuid(),
    title = "Title",
    order = 0,
    description = 'Description',
    userId = null,
    boardId = '',
    columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;

  }

}

