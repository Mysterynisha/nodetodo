const  mongoose  = require("mongoose");
require ('dotenv').config()
let connect=async()=>
{
    await mongoose.connect(`mongodb+srv://460nisha:${process.env.password}@cluster0.wkga1xj.mongodb.net/todo`)
    console.log("mongodb coonected");
}

module.exports=connect