const boardRepo = require('./board.memory.repository')

const getAllBoard = () => boardRepo.getAll()

const getBoardId = (id) => boardRepo.getById(id)

const postBoard = (board) => boardRepo.creationBoard(board)

const putBoard = (id, board) => boardRepo.updateBoard(id, board)

const deleteBoard = (id) => boardRepo.removeBoard(id)

module.exports = {
  getAllBoard,
  getBoardId,
  postBoard,
  putBoard,
  deleteBoard
}