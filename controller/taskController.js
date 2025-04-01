const taskModel = require("../model/taskModel")

const createATask = async (req, res) => {
    try {
        const task = new taskModel({...req.body, deadline:new Date(req.body.deadline)})
    const createdTask = await task.save()
        res.send(createdTask).status(200)
} catch (error) {
        next({status:404, message:"Create task failed"})
    }
    
}

const getAllTasks =async (req, res, next) => {
    try {
        const tasks = await taskModel.find()
        res.status(200).json(tasks)
    } catch (error) {
       next({status:500, message:"something wrong somewhere"})
    }
}

const getOneTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await taskModel.findById(id)
        if(!task){
            return res.json({Message: "Task not found"}).status(404)
        }
        res.json(task).status(200)
    } catch (error) {
     next({status:404, message:"No task with such ID"})  
    }
}

const updateTask = async (req, res, next) => {
    try {
        const updates = req.body
        const {id} = req.params
        const updateTask = await taskModel.findByIdAndUpdate(id, updates, {new:true, runValidators:true})
        if(!updateTask) return next ({status:404, message:"No task with such ID"})
            res.status(200).json(updateTask)
    } catch (error) {
       next({status:404, message:"No task with such ID"})
    }   
}

const deleteTask = async (req, res) => {
    const {id} = req.params
    try{
        await taskModel.findByIdAndDelete(id)
        res.status(200).json({mess:"Task deleted"})
    } catch (err){
        next({status:404, message:"No task to be deleted with such ID"})
    }
}
module.exports = {createATask, getAllTasks, getOneTask, updateTask, deleteTask}