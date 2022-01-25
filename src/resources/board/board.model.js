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
};

module.exports = Board;

