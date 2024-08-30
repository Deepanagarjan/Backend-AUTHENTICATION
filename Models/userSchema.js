import mongoose from 'mongoose'

const userSchema=new mongoose . schema({
    username:String,
    email:String,
    password:string
})

const user = mongoose.model("User",userSchema)                      //User=collection name

export default user;
