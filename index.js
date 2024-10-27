require('dotenv').config()

const express = require("express")


const app= express()
const port = 4000
app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/twitter', (req, res)=>{
    res.send('anasdotcom')
})

app.get('/login', (req, res)=>{
    res.send("<h1>Please login</h1>")
})

app.listen(port, ()=>{

    console.log(`example app running on port ${port}`)
})