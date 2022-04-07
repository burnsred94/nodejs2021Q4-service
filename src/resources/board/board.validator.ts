import { body, param, ValidationChain } from 'express-validator';

export const validationChainBoardUpdateMethod : ValidationChain[] = [
  param('boardId').isUUID('all'),
  body('title', 'Board title incorrect')
    .exists({checkFalsy : true, checkNull: true})
    .isString(),
  body('columns', 'Board columns incorrect')
    .exists({checkNull: true, checkFalsy : true})
    .isArray({min : 1})
];

export const validationChainBoardCreatMethod = [
  body('title', 'Board title incorrect')
    .exists({checkFalsy : true, checkNull: true})
    .isString(),
  body('columns', 'Board columns incorrect')
    .exists({checkNull: true, checkFalsy : true})
    .isArray({min : 1})
];

export const validationChainBoardOtherMethod = [
  param('boardId').isUUID('all')
];