import { InMemoryDatabase } from '../../common/database/InMemoryDatabase'
import { InMemoryDatabaseCollection } from '../../common/database/InMemoryDatabaseCollection';
import { Task } from './tasks.model';


export class TasksDB {
  private tasksCollection : InMemoryDatabaseCollection<Task>;

  constructor() {
    this.tasksCollection = new InMemoryDatabase().getOrAddCollection(Task);
  }

   async getAll(id: string) : Promise<Task[]>{
      const tasks = await this.tasksCollection.getAll();
      return new Promise<Task[]>((resolve) => {
        const result = tasks.filter((task) => task.boardId === id);
        resolve(result);
      });
   };

    getById(id : string) {
      return this.tasksCollection.getId(id);
    };

    creatTask(task : Task) {
      return this.tasksCollection.insert(task);
    };

    updateTask(id : string, task : Task){
      return this.tasksCollection.update(id, task);
    };

    deleteTask(id : string) : Promise<void>{
        return this.tasksCollection.delete(id);
    };

}
