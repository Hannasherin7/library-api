const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "bookname":String,
    "title":String,
    "auther":String,
    "price":String
})
let librariesmodel=mongoose.model("libraries",schema);
module.exports={librariesmodel}