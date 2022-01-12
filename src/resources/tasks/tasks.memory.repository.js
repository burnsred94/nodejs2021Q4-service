const { task } = require('../../common/DB')

class TasksMemoryDB {
  constructor() {
    this.task = task
  }

  getAllTask(){
    return new Promise ((resolve)=>{
      if(task.length !== 0){
      resolve(this.task)
      }
    })
  }

  getById(id){
    return new Promise((resolve)=>{
    resolve(this.task.find((t) => t.id === id))
    })
  }

  creatTask(taskCreat){
    return new Promise((resolve)=>{
    resolve(this.task.push(taskCreat))
    })
  }

  removeTask(taskId){
    return new Promise((resolve) =>{
      resolve(this.task.filter((a) => a.id !== taskId))
    })
  }

  taskUpdate(id, updateTask){
    return new Promise((resolve) =>{
        const index = task.findIndex((t) => t.id === id)
        resolve(this.task[index] = { id, ...updateTask })
    })
  }

}

const taskDB = new TasksMemoryDB()

module.exports = taskDB