import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionDB from './Database/config.js';
import Routers from './userRouter.js'

dotenv.config();
const app =express()



//Middleware
app.use (express.json())
app.use (cors({
    origin:"*",
    credentials:true,

}))

//Db connection
connectDB();

//Default route
app.get("/", (req,res)=>
{
    res.status (200).send("HI WELCOME TO CULNERIES API")
})
//Api routes
app.use ("/api/user",userRouter)

//LISTEN
app.listen(process.env.PORT,()=>{
    console.log ("App is  started and running on the port");

})
