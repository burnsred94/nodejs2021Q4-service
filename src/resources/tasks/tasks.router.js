const router = require('express').Router({mergeParams : true});
const taskService = require('./tasks.service')
const { STATUS_CODE } = require('../../common/constans')
const Task = require("./tasks.model")





router.route('/tasks')
  .get(async (req, res) =>{
    const getAllTask = await taskService.getAllTask()
    res.json(getAllTask, STATUS_CODE.OK)
  })
  .post(async (req, res) =>{

    const creatTask = new Task({
      title : req.body.title,
      order : req.body.order,
      description : req.body.description,
      boardId : req.params.boardId,
      columnId : null,
      userId : null,
    })
      const task = await taskService.creatTask(creatTask)
      res.json(task, STATUS_CODE.CREATE)
  })

router.route('/tasks/:taskId')
  .get(async (req, res) =>{
    const taskById = await taskService.getById(req.params.taskId);
      if(!taskById){
        res.json({message: 'Task Not Found'}, STATUS_CODE.NOT_FOUND);
      }else{
        res.json(taskById, STATUS_CODE.OK);
      };
  })
  .delete(async (req,res) =>{
    const taskDeleteById = await taskService.deleteTask(req.params.taskId)
      if(taskDeleteById === true){
        res.json({message : 'Task delete'}, STATUS_CODE.OK)
      }
  })
  .put(async (req,res)=>{
    const task = new Task ({
      id: req.params.taskId,
      title : req.body.title,
      description : req.body.description,
      order : req.body.order,
      userId : null,
      boardId : req.params.boardId,
      columnId : null
    })
      const newTaskUpdate = await taskService.updateTask(task)
      res.json(newTaskUpdate, STATUS_CODE.OK)
  })



module.exports = router