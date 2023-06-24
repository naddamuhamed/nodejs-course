const router = require("express").Router()
const post = require("../model/post")

const express=require("express").Router()
router.post("/newpost",async(req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const newpost= new post({
        title: title,
        description: description
    })
    const savedpost=await newpost.save()
    res.json(savedpost)
})
router.get("/getposts",async (req,res)=>{
    const posts=await post.find({})
    res.json(posts)
})
router.patch("/editdes/:postid",async(req,res)=>{
    const _id=req.params.postid
   await post.findByIdAndUpdate(_id,{$set:{description: req.body.description}})
    res.json({status:"status updated"})
})
router.get("/getpost/:postid",async(req,res)=>{
    const _id=req.params.postid
    const p=await post.findById(_id)
    res.json(p)
})
router.delete("/delete/:postid",async(req,res)=>{
    const _id=req.params.postid
    await post.findByIdAndRemove({_id:_id})
    res.json({status:"post removed"})
})
module.exports=router