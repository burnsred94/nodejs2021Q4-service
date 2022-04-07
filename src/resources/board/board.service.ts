import { Board } from './board.model';
import { BoardDB } from './board.repository'

const boardRepo = new BoardDB();

const createBoard = (board : Board) => boardRepo.createBoard(board);

const getAll = () => boardRepo.getAllBoard();

const getBoardId = (id : string) => boardRepo.getBoardId(id);

const boardDelete = (id : string) => boardRepo.deleteBoard(id);

const updateBoard = (id: string, board : Board) =>  boardRepo.updateBoard(id, board);


export {
  createBoard,
  getAll,
  getBoardId,
  boardDelete,
  updateBoard
}