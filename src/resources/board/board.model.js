const { v4:uuid } = require('uuid');


class Board {
  constructor({
    id = uuid(),
    title = 'Title',
    columns = [{
      columnId : id,
      title : 'titleColumn',
      order : 0
    }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns
  }

  // static validateRequest(board) {
  //   return (board.hasOwnProperty('title') && board.hasOwnProperty('columns')) === true;

  // }
}

module.exports = Board

