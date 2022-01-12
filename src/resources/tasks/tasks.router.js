const router = require('express').Router({mergeParams : true});

const taskService = require('./tasks.service')
const { STATUS_CODE } = require('../../common/constans')
const Task = require("./tasks.model")





router.route('/:boardId/tasks')
  .get(async (req, res) =>{
    const taskAll = await taskService.getAll()
      if(taskAll === false){
        res.json({message : 'No data DB'},STATUS_CODE.NOT_FOUND)
      }else {
        res.json(taskAll, STATUS_CODE.OK)
      }
  })
  .post(async (req, res) =>{
    const creatTask = new Task({
      title : req.body.title,
      order : req.body.order,
      description : req.body.description,
      boardId : req.params.boardId,
      columnId : null,
      userId : null
    })

    if(!creatTask){
      res.json({message : 'Faille creat task'}, STATUS_CODE.BAD_REQUEST)
    }else {
      await taskService.creatTask(creatTask)
      res.json(creatTask, STATUS_CODE.CREATE)
    } 
  })

router.route('/:boardId/tasks/:taskId')
  .get(async (req, res) =>{
    const taskById = await taskService.getById(req.params.taskId)
    if(!taskById){
      res.json({message : 'Task not found'}, STATUS_CODE.NOT_FOUND)
    }else{
      res.json(taskById, STATUS_CODE.OK)
    }
  })
  .delete(async (req,res) =>{
    const taskDeleteById = await taskService.deleteTask(req.params.taskId)
      if(!taskDeleteById) {
        res.json({message : 'Task not found'}, STATUS_CODE.NOT_FOUND)
      }else{
        res.json(taskDeleteById, STATUS_CODE.OK)
      }
  })
  .put(async (req,res)=>{
    const task = new Task ({
      title : req.body.title,
      description : req.body.order,
      order : req.body.order,
      userId : null,
      boardId : req.params.boardId,
      columnId : null
    })
    if(!task){
      res.json({message : 'Task update invalid error'}, STATUS_CODE.NOT_FOUND)
    }else{
      const newTaskUpdate = await taskService.taskUpdate(req.params.taskId, task)
      res.json(newTaskUpdate, STATUS_CODE.OK)
    }
  })



module.exports = router