const Tasks = require('../models/Tasks');

exports.createTask = async (req, res) => {
    try{
        const {title, description, status} = req.body;
        if(!title || ! description || !status) {
            return res.status(400).json({error: 'Please fill all the fields.'});
        }
        const task = await Tasks.create(req.body);
        res.status(201).json(task);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getTask = async (req, res) => {
    try{
        const task = await Tasks.find();
        res.status(200).json(task);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getTaskById = async (req, res) => {
    try{
        const task = await Tasks.findById(req.params.id);
        if(!task) return res.status(404).json({error: 'Task not found'});
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.updateTask = async (req, res) => {
    try{
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task) return res.status(404).json({error: 'Task not found'});
        res.status(200).json({message: 'Task updated sucessfully', task});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const task = await Tasks.findByIdAndDelete(req.params.id);
        if(!task) res.status(400).json({error: 'Task not found'});
        res.status(200).json({message: 'Task deleted successfully'})
    }catch(error){
        res.status(500).json({error: error.message});
    }
};