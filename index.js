// const http= require("http")

// http.createServer((req,res)=>{
//     res.write("server is up and running")
//     res.end()
// }).listen(3000)

const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("server is up and running")
})
app.listen(3000,()=>{
    console.log("server up and running")
})