const express = require("express")
const app = express()
require("dotenv").config()

PORT = process.env.PORT || 1000

app.get("/", function(req, res){
    res.send("<h1> This is the home page.</h1>")
})

app.listen(PORT, function(){
    console.log(`I am here and the PORT is ${PORT}`)
})