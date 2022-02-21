import { User } from "./user.model";
import { STATUS_CODE } from '../../common/constans';
import express  from 'express';
import * as serviceUser from "./user.service"


export class UsersController {

 async createUser(req: express.Request, res : express.Response) {
    try {
      const newUser: User = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
      })
      const user = await serviceUser.createUser(newUser);
        res.status(STATUS_CODE.CREATE).json(User.toResponse(user));
    } catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message);
    }
  };

 async updateUser(req: express.Request, res : express.Response) {
   try {
     const getUser = await serviceUser.getById(req.params.userId)
     if(getUser) {
       const user: User = new User({
         id: req.params.userId,
         name: req.body.name,
         login: req.body.login,
         password: req.body.password
       })
       await serviceUser.updateUser(req.params.userId, user);
       res.status(STATUS_CODE.OK).json(User.toResponse(user));
     }
   } catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message);
   }
 }
 async getAll(req: express.Request, res : express.Response) {
   try{
      const getAllUsers = await serviceUser.getAll()
        res.status(STATUS_CODE.OK).json(getAllUsers.map(User.toResponse))
   }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
   }
 }
  async getById (req: express.Request, res : express.Response) {
   try {
     const user  = await serviceUser.getById(req.params.userId)
      if(!user){
          res.status(STATUS_CODE.NOT_FOUND).json({message : "User not found"})
      }else {
          res.status(STATUS_CODE.OK).json(User.toResponse(user))
      }
   }catch (e) {
         res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
   }
  }
  async deleteUser (req: express.Request, res : express.Response) {
   try {
      const user = await serviceUser.getById(req.params.userId)
      if(user){
          await serviceUser.deleteUser(req.params.userId)
          res.status(STATUS_CODE.OK).json({message : "User delete"})
      }else{
          res.status(STATUS_CODE.NOT_FOUND).json({message: `User ${req.params.userId} not found`})
      }
   }catch (e) {
        res.status(STATUS_CODE.SERVER_ERROR).send(e.message)
   }
  }
}