const express = require('express');
const { run } = require('./mongodb');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

run(app).catch(console.dir);

app.get('/',(req,res)=>{
    res.send('App is Running')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})