import { Router } from 'express';
import { ValidatorData } from '../../common/validatorDataRequsets';
import { TasksController } from './tasks.controller';
import { validationChainTaskPostMethod, validationChainTaskUpdateMethod, validationChainTaskOtherMethod} from './tasks.validator';

const taskRouter = Router({mergeParams: true})
const tasksValidator = new ValidatorData();
const tasksController = new TasksController()

taskRouter.route('/tasks')
  .get(tasksController.getAll)
  .post(tasksValidator.validate(validationChainTaskPostMethod), tasksController.createTask)
taskRouter.route('/tasks/:taskId')
  .get(tasksValidator.validate(validationChainTaskOtherMethod), tasksController.getTaskId)
  .delete(tasksValidator.validate(validationChainTaskOtherMethod), tasksController.deleteTask)
  .put( tasksController.updateTask)


  
export { taskRouter }