const todo = require("../model/Schema.js");




const getitem=async(req,res)=>{
    const getdata=await todo.find()
    console.log(getdata);
    res.json(getdata)

}
const postitem=async(req,res)=>{
    const data=req.body
    console.log(data);
 
    const item=await todo.create(data)
    console.log(item);
    res.send("Successfully posted")
 }

 const updateitem=async(req,res)=>{
     const userid=req.params.id
     console.log(userid);
     const obj=req.body
     console.log(obj);
     const updateditem= await todo.findByIdAndUpdate(userid,obj,{new:true})
     console.log(updateditem);

     res.send("Successfully updated")
 }


 const deleteitem=async(req,res)=>{
    const id=req.params.id
    console.log(id);
    const deletedata=await todo.findByIdAndDelete(id)
    console.log(deletedata);

    res.send("Successfully deleted")
 }




module.exports={getitem,postitem,updateitem,deleteitem}