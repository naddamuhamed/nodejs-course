const mongoose=require("mongoose")
const post=mongoose.Schema({
    title: {
        required: true,
        type:String
    },
    description: {
        required:true,
        type: String
    },
    // image:{
    //     data:Buffer,
    // }
})
module.exports=mongoose.model("posts",post)