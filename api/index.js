const app=require("express")()

app.listen(3000,()=>console.log("connected to server"))
app.get("/",(req,res)=>{
    res.send("server is up")
})

const routes=require("./routes/routes")

app.use("/routes",routes)