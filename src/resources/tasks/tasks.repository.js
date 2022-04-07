const InMemoryDatabase =  require('../../common/database/InMemoryDatabase')


class TasksDB {
  constructor() {
    this.tasksCollection = InMemoryDatabase.getOrAddCollection('tasks')
  }

    getAll(){
      return this.tasksCollection.getAll()
    };

    getById(id){
      return this.tasksCollection.getId(id)
    };

    creatTask(dataTask){
      return this.tasksCollection.insert(dataTask)
    };

    updateTask(dataTask){
      return this.tasksCollection.update(dataTask)
    };

    deleteTask(id){
      return this.tasksCollection.delete(id)
    }

   async deleteTaskInBoard(id){
      const allTasks = await this.tasksCollection.getAll()
      allTasks.forEach((t) =>{
        if(t.boardId === id){
            this.deleteTask(t.id)
        }
      })
      return true
    }
}



module.exports = new TasksDB()