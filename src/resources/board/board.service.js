const boardRepo = require('./board.repository')


const createBoard = (board) => boardRepo.createBoard(board)

const getAll = () => boardRepo.getAllBoard()

const getBoardId = (id) => boardRepo.getBoardId(id)

const boardDelete = (boardId) => boardRepo.deleteBoard(boardId)

const updateBoard = (dataUpdate) =>  boardRepo.updateBoard(dataUpdate)


module.exports = {
  createBoard,
  getAll,
  getBoardId,
  boardDelete,
  updateBoard
}