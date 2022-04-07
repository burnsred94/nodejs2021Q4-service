import { body, param } from 'express-validator';

export const validationChainUserMethodPost = [
  body("name", "Name incorrect")
    .isString()
    .exists({checkNull : true, checkFalsy : true}),
  body('login', "Login incorrect")
    .isString()
    .exists({checkNull : true})
    .isLength({min: 3}),
  body('password', "password incorrect")
    .isString()
    .exists({checkNull: true})
    .isLength({min : 5}),
];

export const validationChainUserMethodPut = [
  param('userId').isUUID('all'),
  body("name", "Name incorrect")
    .isString()
    .exists({checkNull : true, checkFalsy : true}),
  body('login', "Login incorrect")
    .isString()
    .exists({checkNull : true})
    .isLength({min: 3}),
  body('password', "password incorrect")
    .isString()
    .exists({checkNull: true})
    .isLength({min : 5}),
];

export const validationChainUserOtherMethod = [
  param('userId').isUUID('all')
];




