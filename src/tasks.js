const { randomUUID } = require('node:crypto');
const express = require('express')
const router = express.Router()

const autrouter = require('./aut');

let tasks = [
    {task_id: "1", name: "cook dinner", created_at: "2023-12-22T07:43:17.758Z", done_at: ""},
    {task_id: "2", name: "clean floor", created_at: "2023-12-22T07:43:17.758Z", done_at: ""},
    {task_id: "3", name: "move table", created_at: "2023-12-22T07:43:17.758Z", done_at: ""},
    {task_id: "4", name: "pick-up sister", created_at: "2023-12-22T07:43:17.758Z", done_at: ""}
  ];

router.get('/tasks', (req, res) => {
    //#swagger.tags = ['Tasks']
    if(req.session.email){
        res.status(200).send(tasks);
    }else{
        res.status(409).send("You have to login to access this service")
    }
    
});

router.get('/task/:task_id', (req, res) => {
    //#swagger.tags = ['Tasks']
    if(req.session.email){
        function doWeHaveTask(){
            countsifthere = 0;
            tasks.forEach((task) => {
                if (task.task_id == request.body.task_id){
                    countsifthere = countsifthere + 1;
                }
            })
        
            if(countsifthere != 0){
                return false;
            }else{
                return true;
            }
        }
    
        if(doWeHaveTask()){
            res.status(404).send("Task with given id does not exist please try again with another id!")
        }else{
            res.status(200).send(tasks.find((task) => task.task_id === req.params.task_id))
        }
    }else{
        res.status(409).send("You have to login to access this service")
    }
    
})

router.post('/tasks', (req, res) => {
    //#swagger.tags = ['Tasks']
   if(req.session.email){
        const newTask = req.body;
        newTask['created_at'] = new Date().toISOString();
        newTask['done_at'] = ''
        newTask['task_id'] = randomUUID();

        if(newTask.name){
            tasks = [...tasks, newTask];
            res.status(201).send(tasks);
        }else{
            res.status(400).send("Please enter the name of the task!")
        }
   }else{
    res.status(409).send("You have to login to access this service")
}
    

    
});

router.patch('/task/:task_id', (req, res) => {
    //#swagger.tags = ['Lends']
    if(req.session.email){
        const keys = Object.keys(req.body);
        const oldTasks = tasks.find(task => task.task_id === req.params.task_id);
        keys.forEach(key => oldTasks[key] = req.body[key]);
        tasks = tasks.map(task => task.task_id === parseInt(req.params.task_id) ? oldTasks : task);
        res.status(201).send(tasks);
    }else{
        res.status(409).send("You have to login to access this service")
    }
})

router.delete('/task/:task_id', (req, res) => {
    //#swagger.tags = ['Lends']
    if(req.session.email){
        function doWeHaveTask(){
            countsifthere = 0;
            tasks.forEach((task) => {
                if (task.task_id == req.params.task_id){
                    countsifthere = countsifthere + 1;
                }
            })
        
            if(countsifthere != 0){
                return false;
            }else{
                return true;
            }
        }
    
        if(doWeHaveTask()){
            res.status(404).send("There is no task with the given id, please try again with another task_id")
        }else{
            tasks = tasks.filter(task => task.task_id !== req.params.task_id)
            res.status(200).send(tasks)
        }
    }else{
        res.status(409).send("You have to login to access this service")
    }
})

module.exports = router