// Assignment of 27th March

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Install Postman", completed: true }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
        res.json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.status(204).send();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API! Go to /tasks to see your list.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000`);
});