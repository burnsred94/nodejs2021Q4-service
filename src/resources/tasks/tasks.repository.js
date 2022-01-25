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
}



module.exports = new TasksDB()