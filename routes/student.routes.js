const express = require('express')
const mongoose = require('mongoose')
const studentModel = require('../model/student.model')
const { urlencoded } = require('body-parser')
const route = express.Router()

const {getStudentsById} =require('../controllers/students.controllers')

const{getStudent}=require('../controllers/students.controllers')


route.use(express.json())
route.use(express.urlencoded({extended:true}))



route.get('/:id',getStudentsById)
route.get('/',getStudent)


route.post('/', async (req, res) => {
    try {
        const { id, name, phn, email } = req.body;
        const student = await studentModel.create({
            _id: id,
            name: name,
            phn: phn,
            email: email
        });
        res.status(201).json(student); // Use 201 status code for successful resource creation
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



route.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedStudent = await studentModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent)
            return res.status(404).json({ message: `Student with ID ${id} not found` });
        res.status(200).json(updatedStudent);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


route.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const student = await studentModel.findByIdAndDelete(id);
        if (!student)
            return res.status(404).json({ message: `Student with ID ${id} not found` });
        
        res.status(200).json({ message: `Student with ID ${id} successfully deleted` });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports=route;
