import { ValidationChain, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from './constans';


export class ValidatorData {

  validate(validations: ValidationChain[]){
    return async (req : Request, res : Response, next : NextFunction) => {
      await Promise.all(validations.map(validation => validation.run(req)));
      const error = validationResult(req);
      if(error.isEmpty()){
        return next();
      }
      res.status(STATUS_CODE.BAD_REQUEST).json({error: error.array()});
    }
  };
}