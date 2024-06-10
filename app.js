const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const libraries=require("./models/library")


const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome")
})

app.listen(8080,()=>{
    console.log("server started")
})