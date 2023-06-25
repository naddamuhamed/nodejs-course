const express=require("express")
const path=require('path')
const hoganmiddleware=require("hogan-middleware")
const app=express()
app.set('views',path.join(__dirname,'views'))
app.set('view engine','mustache')
app.engine('mustache',hoganmiddleware.__express)
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res,next)=>{
res.send("hello!")
})
app.get('/json',(req,res,next)=>{
    const data=({greeting:"hello"})
    res.json(data)
    })


    app.get('/home',(req,res,next)=>{
        res.render('home',null)
    })
app.listen(3000) //3000.5000.8000.8080
console.log("server is running")
