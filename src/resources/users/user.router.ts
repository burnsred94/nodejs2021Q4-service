import { Router } from 'express';
import { UsersController } from './users.controller';
import { ValidatorData } from '../../common/validatorDataRequsets';
import { validationChainUserMethodPost, validationChainUserMethodPut, validationChainUserOtherMethod} from './user.validator'

const userRouter = Router({ mergeParams : true })
const userController = new UsersController()
const userValidator = new ValidatorData()

userRouter.route('/', )
    .get(userController.getAll)
    .post(userValidator.validate(validationChainUserMethodPost), userController.createUser)
userRouter.route('/:userId')
    .get(userValidator.validate(validationChainUserOtherMethod), userController.getById)
    .delete(userValidator.validate(validationChainUserOtherMethod), userController.deleteUser)
    .put(userValidator.validate(validationChainUserMethodPut), userController.updateUser)



export { userRouter };
 