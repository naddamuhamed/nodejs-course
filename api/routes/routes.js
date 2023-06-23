const router= require("express").Router()

router.get("/ping",(req,res)=>{
    res.json({response: "pong"})
})
module.exports=router