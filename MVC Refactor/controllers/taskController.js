const Task = require('../models/taskmodel');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
};