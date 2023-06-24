const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("connected to db"))
        .catch((err) => console.log(err))
app.use("/posts",require("./routes/post"))
app.listen(process.env.PORT, () => console.log("server is running"))


