import express from 'express'
import { Board } from './board.model';
import { STATUS_CODE } from '../../common/constans';
import * as serviceBoard from './board.service'
import  * as serviceTask from '../tasks/tasks.service'

export class BoardController {

  async getAllBoard(req : express.Request, res: express.Response){
    try{
      const getAllBoard = await serviceBoard.getAll()
          res.status(STATUS_CODE.OK).json(getAllBoard)
    }catch (e){
          res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  };
  async getBoardId(req : express.Request, res: express.Response){
    try{
      const getBoardId = await serviceBoard.getBoardId(req.params.boardId)
        if(getBoardId){
          res.status(STATUS_CODE.OK).json(getBoardId)
        }else{
          res.status(STATUS_CODE.NOT_FOUND).json({message : 'Board not found'})
        }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  };
  async createBoard(req : express.Request, res : express.Response) {
    try {
      const creatBoard = await serviceBoard.createBoard(new Board({
        title : req.body.title,
        columns : req.body.columns
      }));
        res.status(STATUS_CODE.CREATE).json(creatBoard)
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message: 'Create board error'})
    }
  };

  async updateBoard(req : express.Request, res : express.Response) {
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId)
      if(!board){
        res.status(STATUS_CODE.NOT_FOUND).json({message : `Board ${req.params.boardId} not found`})
      }else {
        const updateBoard = new Board({
          id: req.params.boardId,
          title: req.body.title,
          columns: req.body.columns
        })
        await serviceBoard.updateBoard(req.params.boardId, updateBoard)
        res.status(STATUS_CODE.OK).json(updateBoard)
      }
    }catch (e){
        res.status(STATUS_CODE.SERVER_ERROR).json({message : 'Update board error'})
    }
  };
  async deleteBoard(req : express.Request, res : express.Response){
    try{
      const deleteBoard = await serviceBoard.boardDelete(req.params.boardId)
      const deleteTask = await serviceTask.deleteTasksInBoard(req.params.boardId)
      if(deleteTask && deleteBoard === true){
        res.status(STATUS_CODE.OK).json({message : "Board and Task delete"})
      }else if(deleteBoard === true){
        res.status(STATUS_CODE.OK).json({message : "Board delete"})
      }else {
        res.status(STATUS_CODE.NOT_FOUND).json({message : "Board and Task Not found"})
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  }
}