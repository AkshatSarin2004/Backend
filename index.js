require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
app.get('/',(req,res)=>{
   res.send('home')
})
app.get('/abc',(req,res)=>{
    res.send('home abc')
})
app.get('/abcd',(req,res)=>{
    res.send('<h1>home abcd</h1>')
})
app.get('/ab',(req,res)=>{
    res.send('<h1>home ab</h1>')
})
app.listen(process.env.PORT, "0.0.0.0",()=>{
    console.log(`app listening on port = ${port}`)
})