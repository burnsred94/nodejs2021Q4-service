import { v4 as uuid4 } from 'uuid';
import { IBoard } from './board.types';

export class Board implements IBoard{
  id : string;
  title : string;
  columns : { columnId: string; title: string; order: number }[];
  constructor({
      id = uuid4(),
      title = 'Title',
      columns = [{
          columnId : uuid4(),
          title : 'titleColumn',
          order : 0
    }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  };
}



