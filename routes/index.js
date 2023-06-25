const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('hello from routes folder')
})

router.get('/json', (req, res, next) => {
    const data = ({ greeting: "hello from routes folder" })
    res.json(data)
})


router.get('/home', (req, res, next) => {
    res.render('home', null)
})
module.exports = router