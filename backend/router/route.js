const express=require("express")
const {getitem,postitem,updateitem,deleteitem}=require('../controller/controller.js')

const router=express.Router()

router.get('/todo',getitem)

router.post('/todo',postitem)

router.put('/todo/:id',updateitem)

router.delete('/todo/:id',deleteitem)



module.exports=router