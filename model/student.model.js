
const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:String,
    phn:Number,
    email:String
})

const studentModel=mongoose.model("student",studentSchema)

module.exports=studentModel