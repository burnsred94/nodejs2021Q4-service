import express from 'express'
import { Board } from './board.model';
import { STATUS_CODE } from '../../common/constans';
import * as serviceBoard from './board.service'


export class BoardController {

  async getAllBoard(req : express.Request, res: express.Response){
    try{
      const allBoard = await serviceBoard.getAll()
          res.status(STATUS_CODE.OK).json(allBoard)
    }catch (e){
          res.status(STATUS_CODE.SERVER_ERROR).json({message : "Get all boards server error"})
    }
  };
  async getBoardId(req : express.Request, res: express.Response){
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId)
        if(board){
          res.status(STATUS_CODE.OK).json(board);
        }else{
          res.status(STATUS_CODE.NOT_FOUND).json({message : `Board ${req.params.boardId}`});
        }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message : "Get board server error"});
    }
  };
  async createBoard(req : express.Request, res : express.Response) {
    try {
      const board = await serviceBoard.createBoard(new Board({
        title : req.body.title,
        columns : req.body.columns
      }));
        res.status(STATUS_CODE.CREATE).json(board);
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message: 'Create board error'});
    }
  };

  async updateBoard(req : express.Request, res : express.Response) {
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId);
      if(!board){
        res.status(STATUS_CODE.NOT_FOUND).json({message : `Board ${req.params.boardId} not found`});
      }else {
        const updateBoard = new Board({
          id: req.params.boardId,
          title: req.body.title,
          columns: req.body.columns
        });
        await serviceBoard.updateBoard(req.params.boardId, updateBoard);
        res.status(STATUS_CODE.OK).json(updateBoard);
      }
    }catch (e){
        res.status(STATUS_CODE.SERVER_ERROR).json({message : 'Update board error'})
    }
  };
  async deleteBoard(req : express.Request, res : express.Response){
    try{
      const deleteBoard = await serviceBoard.boardDelete(req.params.boardId);
      if(deleteBoard){
        res.status(STATUS_CODE.OK).json({message : "Board delete"});
      }else {
        res.status(STATUS_CODE.NOT_FOUND).json({message : "Board and Task Not found"});
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message : "Delete board server error"});
    }
  }
}