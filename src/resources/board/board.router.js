const router = require('express').Router({mergeParams : true});
const boardService = require("./board.service");
const Board = require("./board.model")
const { STATUS_CODE } = require('../../common/constans');



router.route('/')
    .post(async (req, res) => {
    const creatBoard = new Board({
        title: req.body.title,
        columns: req.body.columns
      }
      )
      const dataBoard = await boardService.createBoard(creatBoard)
      res.json(dataBoard, STATUS_CODE.CREATE)
  })
    .get( async (req, res)=>{
        const dataAllBoards = await boardService.getAll()
        res.json(dataAllBoards, STATUS_CODE.OK)
    })
router.route('/:boardId')
    .get(async ( req,res) =>{
        const getBoardId = await boardService.getBoardId(req.params.boardId)
        if(getBoardId) {
            res.json(getBoardId, STATUS_CODE.OK)
        }else{
            res.json({message : 'Not Found'}, STATUS_CODE.NOT_FOUND)
        }
    })
    .delete(async (req, res) =>{
        const boardDelete = await boardService.boardDelete(req.params.boardId)
        if(boardDelete === true){
            res.json({message : 'Delete successfully'}, STATUS_CODE.NO_CONTENT)
        }else{
            res.json({message : 'Not Found'}, STATUS_CODE.BAD_REQUEST)
        }
    })
    .put(async (req, res)=>{
        const updateBoard = new Board({
            id: req.params.boardId,
            title : req.body.title,
            columns: req.body.columns
        })
        const getBoardUpdate = await boardService.updateBoard(updateBoard)
        res.json(getBoardUpdate, STATUS_CODE.OK)
    })





module.exports = router
