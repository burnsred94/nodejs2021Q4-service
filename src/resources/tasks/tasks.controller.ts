import express from 'express'
import * as serviceTask from './tasks.service'
import { STATUS_CODE } from '../../common/constans';
import { Task } from './tasks.model';

export  class TasksController {

  async getAll(req : express.Request, res: express.Response) {
    try{
      const allTasks = await serviceTask.getAllTask()
        res.status(STATUS_CODE.OK).json(allTasks)
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  }

  async getTaskId(req : express.Request, res: express.Response) {
    try{
      const getTaskId = await serviceTask.getById(req.params.taskId)
        res.status(STATUS_CODE.OK).json(getTaskId)
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
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
          await serviceTask.creatTask(newTask)
          res.status(STATUS_CODE.CREATE).json(newTask)
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  }

  async updateTask(req : express.Request, res: express.Response) {
    try{
      const task =  await serviceTask.getById(req.params.taskId)
      if(!task){
        res.status(STATUS_CODE.NOT_FOUND).json({message: `Task ${req.params.taskId} not found`})
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
        await serviceTask.updateTask(req.params.taskId, newUpdateTask)
        res.status(STATUS_CODE.OK).json(newUpdateTask)
      }
    }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  }
  async deleteTask(req : express.Request, res: express.Response) {
    try{
      const getTask = await serviceTask.getById(req.params.taskId)
      if(getTask !== undefined){
        await serviceTask.deleteTask(req.params.taskId)
        res.status(STATUS_CODE.OK).json({ message: 'Task delete' })
      }else {
        res.status(STATUS_CODE.NOT_FOUND)
      }
    }catch (e) {
          res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
    }
  }
}