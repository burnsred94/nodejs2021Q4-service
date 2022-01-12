const { board } = require('../../common/DB');


class BoardMemoryDB {
  constructor() {
    this.board = board
  }

  getAll() {
    return new Promise ((resolve)=> {
    if (this.board.length !== 0) {
      resolve(this.board)
    }
    })
  }

  getById(id) {
    return new Promise ((resolve)=>{
      resolve(this.board.find((b) => b.id === id))
    })
  }

  creationBoard(boardCreat) {
    return new Promise ((resolve)=>{
      resolve(this.board.push(boardCreat))
    })
  }

  updateBoard(id, boardUpdate) {
    return new Promise ((resolve)=>{
    const index = this.board.findIndex((b) => b.id === id);
    resolve(this.board[index] = { id, ...boardUpdate });
    })
  }

  removeBoard(id) {
    return  new Promise ((resolve)=>{
      this.board = this.board.filter((b) => b.id !== id)
    resolve(this.board)
    })
  }
}


const BoardDB = new BoardMemoryDB

module.exports = BoardDB