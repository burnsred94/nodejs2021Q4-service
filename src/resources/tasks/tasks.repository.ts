import { InMemoryDatabase } from '../../common/database/InMemoryDatabase'
import { InMemoryDatabaseCollection } from '../../common/database/InMemoryDatabaseCollection';
import { Task } from './tasks.model';


export class TasksDB {
  private tasksCollection : InMemoryDatabaseCollection<Task>

  constructor() {
    this.tasksCollection = new InMemoryDatabase().getOrAddCollection(Task)
  }

    getAll() : Promise<Task[]>{
      return this.tasksCollection.getAll();
    };

    getById(id : string) {
      return this.tasksCollection.getId(id)
    };

    creatTask(task : Task) {
      return this.tasksCollection.insert(task)
    };

    updateTask(id : string, task : Task){
      return this.tasksCollection.update(id, task)
    };

    deleteTask(id : string) : Promise<void>{
        return this.tasksCollection.delete(id)
    };

    async deleteTasksInBoard(id : string) : Promise <true | undefined> {
      const allTasks = await this.tasksCollection.getAll()
         const task =  allTasks.find((t) => t.boardId = id)
          if(!task){
            return task
          }else {
            await this.tasksCollection.delete(task.id)
            return true
          }
    }
}
