import express from 'express'
import * as serviceTask from './tasks.service'
import * as serviceBoard from '../board/board.service'
import { STATUS_CODE } from '../../common/constans';
import { Task } from './tasks.model';


export  class TasksController {

  async getAll(req : express.Request, res: express.Response) {
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId);
      if(board){
        const tasks = await serviceTask.getAllTask(req.params.boardId);
          if(tasks) {
            res.status(STATUS_CODE.OK).json(tasks);
          }else{
            res.status(STATUS_CODE.NOT_FOUND).json({message : `Tasks ${req.params.taskId} not found`});
        }
      }else {
        res.status(STATUS_CODE.NOT_FOUND).json({message : `Board ${req.params.boardId} not found`});
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send({message : 'Get all task server error'});
    }
  }

  async getTaskId(req : express.Request, res: express.Response) {
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId);
      if(board){
        const task = await serviceTask.getById(req.params.taskId);
        if(task){
          res.status(STATUS_CODE.OK).json(task);
        }else{
          res.status(STATUS_CODE.NOT_FOUND).json({message : `Task ${req.params.taskId} not found`});
        }
      }else {
          res.status(STATUS_CODE.NOT_FOUND).json({message: `Board ${req.params.boardId} not found`});
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message : "Get task server error"});
    }
  }

  async createTask(req : express.Request, res: express.Response) {
    try{
        const newTask = new Task({
          title: req.body.title,
          order : req.body.order,
          description : req.body.description,
          userId : null,
          boardId : req.params.boardId,
          columnId : null
        });
        const task = await serviceTask.creatTask(newTask);
          res.status(STATUS_CODE.CREATE).json(task);
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message : "Create task server error"});
    }
  }

  async updateTask(req : express.Request, res: express.Response) {
    try{
      const task = await serviceTask.getById(req.params.taskId);
      if(!task){
        res.status(STATUS_CODE.NOT_FOUND).json({message: `Task ${req.params.taskId} not found`});
      }else {
        const newUpdateTask = new Task({
          id: req.body.id || req.params.taskId,
          title: req.body.title,
          order: req.body.order,
          description: req.body.description,
          userId: null,
          boardId: req.params.boardId,
          columnId: null
        });
        await serviceTask.updateTask(req.params.taskId, newUpdateTask);
        res.status(STATUS_CODE.OK).json(newUpdateTask);
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).json({message : `Update task server error`});
    }
  }
  async deleteTask(req : express.Request, res: express.Response) {
    try{
      const board = await serviceBoard.getBoardId(req.params.boardId);
      if(board){
        const task = await serviceTask.getById(req.params.taskId);
        if(task){
          await serviceTask.deleteTask(req.params.taskId);
          res.status(STATUS_CODE.OK).json({ message: 'Task delete' });
        }else {
          res.status(STATUS_CODE.NOT_FOUND).json({message : `Task ${req.params.taskId} not found`});
        }
      }else {
          res.status(STATUS_CODE.NOT_FOUND).json({message : `Board ${req.params.boardId} not found`});
      }
    }catch (e) {
          res.status(STATUS_CODE.SERVER_ERROR).json({message : "Delete task server error"});
    }
  }
}