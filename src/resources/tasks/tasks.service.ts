import { TasksDB } from './tasks.repository';
import { Task } from './tasks.model';

const taskRepo = new TasksDB();

const getAllTask = () => taskRepo.getAll();

const getById = (id: string) => taskRepo.getById(id);

const creatTask = (task : Task) => taskRepo.creatTask(task);

const deleteTask = (id : string) => taskRepo.deleteTask(id);

const deleteTasksInBoard = (id : string)=> taskRepo.deleteTasksInBoard(id)

const updateTask = (id : string, task : Task) => taskRepo.updateTask(id,task);

export  {
  getAllTask,
  getById,
  creatTask,
  deleteTask,
  updateTask,
  deleteTasksInBoard
}