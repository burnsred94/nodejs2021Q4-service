const router = require('express').Router({mergeParams : true});
const usersService = require('./user.service');
const User = require("./user.model")
const { STATUS_CODE } = require('../../common/constans')



router.route('/')
  .get(async (req,res)=>{
    const users = await usersService.getAll()
        res.json(users.map(User.toResponse), STATUS_CODE.OK)
  })
  .post(async (req, res)=>{
    const createUser =  new User(
      {
        name : req.body.name,
        login : req.body.login,
        password : req.body.password
      }
    )
    await usersService.postUser(createUser)
    res.json(User.toResponse(createUser), STATUS_CODE.CREATE)
  })

router.route('/:userId')
  .get(async (req, res) =>{
    const user = await usersService.getById(req.params.userId)
    if(!user){
      res.json({ message : 'User is not found 404'}, STATUS_CODE.NOT_FOUND)
    }else {
      res.json(User.toResponse(user), STATUS_CODE.OK)
    } 
  })
  .delete(async (req, res) =>{
    const user = await usersService.deleteUser(req.params.userId)
    res.json(user, STATUS_CODE.OK)
  })
  .put(async (req,res)=>{
    const updateUser = new User({
      id : req.params.userId,
      name : req.body.name,
      login : req.body.login,
      password : req.body.password
    })
    const user = await usersService.putId(req.params.userId, updateUser)
    if(!user){
      res.json({ message : 'User is not found 404'}, STATUS_CODE.NOT_FOUND)
    }else{
      res.json(User.toResponse(user), STATUS_CODE.OK)
    }
  })




module.exports = router; 
 