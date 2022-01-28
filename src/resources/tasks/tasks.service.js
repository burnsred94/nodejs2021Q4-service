const taskRepo = require("./tasks.repository")

const getAllTask = () => taskRepo.getAll();

const getById = (id) => taskRepo.getById(id);

const creatTask = (task) => taskRepo.creatTask(task);

const deleteTask = (taskId) => taskRepo.deleteTask(taskId);

const deleteTaskInBoard = (boardId)=> taskRepo.deleteTaskInBoard(boardId)

const updateTask = (update) => taskRepo.updateTask(update);

module.exports = {
  getAllTask,
  getById,
  creatTask,
  deleteTask,
  updateTask,
  deleteTaskInBoard
}