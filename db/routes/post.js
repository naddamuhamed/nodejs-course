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
module.exports=router