const InMemoryDatabase = require('../../common/database/InMemoryDatabase')

class BoardDB {
  constructor() {
    this.boardCollection = InMemoryDatabase.getOrAddCollection('boards')
  }

  createBoard(board){
    return this.boardCollection.insert(board);
  };

  getAllBoard(){
    return this.boardCollection.getAll();
  };

  getBoardId(boardId){
    return this.boardCollection.getId(boardId);
  };

  deleteBoard(boardId){

    return this.boardCollection.delete(boardId);
  };

  updateBoard(dataUpdate){
    return this.boardCollection.update(dataUpdate);
  }

}



module.exports = new BoardDB()