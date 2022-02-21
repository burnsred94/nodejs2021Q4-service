import { param, body } from 'express-validator';

export const validationChainTaskPostMethod = [
  body('title', 'Title incorrect')
    .isString()
    .isLength({min : 1})
    .exists({checkFalsy: true, checkNull : true}),
  body('description')
    .exists({checkFalsy: true, checkNull: true})
    .isString()
    .isLength({min : 5}),
  // body('userId')
  //   .isString(),
  // body('boardId')
  //   .isUUID('all'),
  // body('columnId')
  //   .isUUID

]

export const validationChainTaskUpdateMethod = [
  body('taskId','ID incorrect' )
    .isString(),


];

export const validationChainTaskOtherMethod = [
  param('taskId').isUUID('all')
]