import mongoose from 'mongoose'

let loginSchema=new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    username:{type:String,trim:true,required:true},
    address:{type:String,trim:true,required:true},
    email:{type:String,trim:true,required:true,unique:true},
    mobile:{type:Number,require:true},
    password:String,
    category:{type:String,require:true},
    dateOfBirth:{type:Date,require:true}
})
let loginModel=mongoose.model('login',loginSchema)

export default loginModel