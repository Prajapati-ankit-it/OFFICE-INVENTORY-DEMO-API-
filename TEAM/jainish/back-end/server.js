const express = require("express")
const app = express()

PORT = process.env || 8085

app.listen(PORT, function(){
    console.log(`I am here and the PORT is ${PORT}`)
})