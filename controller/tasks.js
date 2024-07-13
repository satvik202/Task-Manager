// const mongoose = require('mongoose')

const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
  try{
    const task = await Task.find({});
    res.status(200).json({ task })
  }catch(err){
    res.status(500).json({msg : err});
  }
};
const getTask = async (req, res) => {
  try{

    const task = await Task.findOne({_id : req.params.id})
    
    if(!task) return res.status(404).json({msg : `no task with id : ${req.params.id}`})
    
    res.status(200).json({task})

  }catch(err){
    res.status(500).json({msg : err});
  }
  // res.json({id : req.params.id})
};
const createTask = async (req, res) => {

  try{
    const task = await Task.create(req.body);
    res.status(201).json({task})

  }catch(err){
    res.status(500).json({msg : err})
  }

};
const deleteTask = async (req, res) => {
  try{
    
    const task = await Task.findOneAndDelete({_id : req.params.id})
    
    if(!task) return res.status(404).json({msg : `no task with id : ${req.params.id}`})
      
      res.status(200).json({task})
      
  }catch(err){
    res.status(500).json({msg : err});
  }
};

const updateTask =async (req, res) => {
  try{
    
    const task = await Task.findOneAndUpdate({_id : req.params.id}, req.body, {
      new: true,
      runValidators : true,
    })
    
    if(!task) return res.status(404).json({msg : `no task with id : ${req.params.id}`})
      
      res.status(200).json({task})
      
  }catch(err){
    res.status(500).json({msg : err});
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
