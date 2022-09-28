const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
name:{type:String,required:true },
image:{type:String,required:true },
description:{type:String,required:true },
cartegory:{type:String,required:true },
properties:{type:String,required:true },
subimages:{type:String,required:true},


},
{timestamps:true})


module.exports=mongoose.model("Post",postSchema) 