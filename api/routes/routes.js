const router= require("express").Router()

router.get("/ping",(req,res)=>{
    res.json({response: "pong"})
})
router.post("/pong",(req,res)=>{
    const request=req.body
    // res.json(request)
    if(request.ping){
        res.json(request)
    }
    else{
        res.status(400).json({error:"not allowed"})
    }
})
router.patch("/pingpong",(req,res)=>{
    const request=req.body
    if(request._id == "ping"){
        res.json({"response":"pong"})
    }
    else{
        res.status(400).json({"error":"not allowed"})
    }
})
module.exports=router