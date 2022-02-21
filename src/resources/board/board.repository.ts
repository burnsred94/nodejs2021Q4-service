import { InMemoryDatabaseCollection } from '../../common/database/InMemoryDatabaseCollection';
import { InMemoryDatabase } from '../../common/database/InMemoryDatabase'
import { Board } from './board.model';


export class BoardDB {
  private boardCollection: InMemoryDatabaseCollection<Board>;

  constructor() {
    this.boardCollection = new InMemoryDatabase().getOrAddCollection(Board)
  }

  createBoard(board : Board) : Promise<Board> {
    return this.boardCollection.insert(board);
  };

  getAllBoard(){
    return this.boardCollection.getAll();
  };

  getBoardId(id : string) : Promise<Board | undefined>{
    return this.boardCollection.getId(id);
  };

  async deleteBoard(id : string): Promise <true | undefined> {
    const findBoard = await this.getBoardId(id)
    if(typeof findBoard === 'undefined'){
      return findBoard
    }else{
      await this.boardCollection.delete(id);
      return true
    }

  };

  updateBoard(id : string, boardUpdate : Board) {
    return this.boardCollection.update(id, boardUpdate);
  }

};