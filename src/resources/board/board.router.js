const router = require('express').Router({mergeParams : true});
const boardService = require("./board.service");
const Board = require("./board.model")
const { STATUS_CODE } = require('../../common/constans');

const AUTHORIZED = true


router.route('/')
  .get(async (req,res) => {
    const board = await boardService.getAllBoard()
    if(board === false){
     res.send(STATUS_CODE.NO_CONTENT)
    }else {
      res.json(board, STATUS_CODE.OK)
    }
  })
  .post(async (req, res) => {
    const creatBoard = new Board({
        title: req.body.title,
        columns: req.body.columns
      }
    )

    if(AUTHORIZED === false){
      res.json({message : "UNAUTHORIZED USER" }, STATUS_CODE.UNAUTHORIZED)
    }else if (Board.validateRequest(creatBoard) === true) {
        await boardService.postBoard(creatBoard)
        res.json(creatBoard, STATUS_CODE.CREATE)
      } else {
        res.json({ message: "Bad request" }, STATUS_CODE.BAD_REQUEST)
      }
  })

router.route('/:boardId')
  .get(async (req, res)=>{
    const boardId = await boardService.getBoardId(req.params.boardId)
    if(!boardId){
      res.json({message : 'Board not found'}, STATUS_CODE.NOT_FOUND)
    }else {
      res.json(boardId, STATUS_CODE.OK)
    }
  })
  .put(async (req, res) =>{
    const boardUpdate = new Board({
      id : req.body.id,
      title : req.body.title,
      columns : req.body.columns
      })

    if(AUTHORIZED === false){
      res.send({message: "UNAUTHORIZED USER"}, STATUS_CODE.UNAUTHORIZED)
    }else if (Board.validateRequest(boardUpdate) === true) {
        await boardService.putBoard(req.params.boardId, boardUpdate)
        res.json(boardUpdate, STATUS_CODE.OK)
      } else {
        res.json({ message: "Fail update board" }, STATUS_CODE.NOT_FOUND)
      }
  })
  .delete(async (req,res) =>{
      const deleteBoard = await boardService.getBoardId(req.params.boardId)
      if(AUTHORIZED === false){
          res.json({message: "UNAUTHORIZED user"}, STATUS_CODE.UNAUTHORIZED)
        }else if (!deleteBoard) {
          res.json({ message: 'board not found' }, STATUS_CODE.NOT_FOUND)
        } else {
          boardService.deleteBoard(req.params.boardId)
          res.json({ message: "board deleted" }, STATUS_CODE.OK)
        }
  })




module.exports = router
