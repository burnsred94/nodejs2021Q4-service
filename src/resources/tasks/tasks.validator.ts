import { param, body } from 'express-validator';

export const validationChainTaskPostMethod = [
  body('title', 'Title incorrect')
    .isString()
    .isLength({min : 1})
    .exists({checkFalsy: true, checkNull : true}),
  body('description')
    .exists({checkFalsy: true, checkNull: true})
    .isString()
    .isLength({min : 5})
];

export const validationChainTaskUpdateMethod = [
  body('title', "Title incorrect")
    .exists({checkFalsy: true, checkNull: true})
    .isString()
    .isLength({min: 2}),
  body('description',"Description incorrect")
    .exists({checkFalsy: true, checkNull: true})
    .isString()
    .isString(),
];

export const validationChainTaskOtherMethod = [
  param('taskId').isUUID('all')
]