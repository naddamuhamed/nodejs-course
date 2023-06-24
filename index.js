const express=require("express")
const app=express()

app.get('/',(req,res,next)=>{
res.send("hello!")
})

app.listen(3000) //3000.5000.8000.8080
