const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "bookname":{type:String,required:true},
    "title":{type:String,required:true},
    "auther":{type:String,required:true},
    "price":{type:String,required:true}
})
let librarymodel=mongoose.model("libraries",schema);
module.exports={librarymodel}