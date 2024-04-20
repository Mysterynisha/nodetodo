const  mongoose  = require("mongoose");


const todolist=new mongoose.Schema(

    {
     userid:{
          type:String,
          required:[true,"userid required"],
          unique:true
     },
     

     item:{
        type:String,
        required:[true,"item required"],
        
   },

   iscompleted:{
    type:Boolean,
    required:true
},


    }
)



const todo=mongoose.model("todo",todolist)


module.exports=todo