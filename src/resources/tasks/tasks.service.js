const taskRepo = require("./tasks.memory.repository")

const getAll = () => taskRepo.getAllTask();

const getById = (id) => taskRepo.getById(id);

const creatTask = (task) => taskRepo.creatTask(task);

const deleteTask = (taskId) => taskRepo.removeTask(taskId)

const taskUpdate = (id, update) => taskRepo.taskUpdate(id, update)

module.exports = {
  getAll,
  getById,
  creatTask,
  deleteTask,
  taskUpdate
}