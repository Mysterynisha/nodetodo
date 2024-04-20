const express=require("express")
require("dotenv").config()
const connect=require('./database/database.js')
const cors=require('cors')
const router=require('./router/route.js')
const app=express()

connect()
//middleware
app.use(express.json())
app.use(cors())
//route
app.use('/api',router)


const port=process.env.port
app.listen(port,()=>{
    console.log(`this port is listening to ${port}`);
})