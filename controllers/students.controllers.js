const studentModel =require('../model/student.model')

async function getStudentsById(req,res)
{
    const {id}=req.params;
    const student = await studentModel.findById(id)
            
    if(!student)    
        res.status(404).json({message:`id not found`})
    res.status(200).json(student)   
}

async function getStudent(req,res)
{
    const student = await studentModel.find({})
    res.status(200).json(student)
}
module.exports={getStudentsById,getStudent}