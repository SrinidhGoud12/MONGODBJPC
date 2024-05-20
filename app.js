const express = require('express');
const app = express();

require ('dotenv').config();
const port=process.env.PORT;

const studentRoute = require('./routes/student.routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/students',studentRoute)

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/testjp")
.then(()=>{console.log("connetion successfull")})

const studentModel=require('./model/student.model')

app.listen(port,()=>
{
    console.log(`server is rumming at ${port}`)
})
