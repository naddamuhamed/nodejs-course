const app=require("express")()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)

app.listen(3000,()=>console.log("connected to server"))
app.get("/",(req,res)=>{
    res.send("server is up")
})

const routes=require("./routes/routes")

app.use("/routes",routes)