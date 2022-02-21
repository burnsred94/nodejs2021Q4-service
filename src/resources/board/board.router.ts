import { Router } from 'express';
import { ValidatorData } from '../../common/validatorDataRequsets';
import { BoardController } from './board.controller';
import { validationChainBoardCreatMethod, validationChainBoardOtherMethod, validationChainBoardUpdateMethod } from './board.validator'

const boardRouter = Router({mergeParams: true})
const boardValidator = new ValidatorData()
const boardController =  new BoardController()

boardRouter.route('/')
    .post(boardValidator.validate(validationChainBoardCreatMethod), boardController.createBoard)
    .get(boardController.getAllBoard)
boardRouter.route('/:boardId')
    .get(boardValidator.validate(validationChainBoardOtherMethod), boardController.getBoardId)
    .delete(boardValidator.validate(validationChainBoardOtherMethod), boardController.deleteBoard)
    .put(boardValidator.validate(validationChainBoardUpdateMethod), boardController.updateBoard)


export { boardRouter }
