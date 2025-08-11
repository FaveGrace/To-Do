const express = require('express');
const router = express.Router();
const { createTask, getTask, getTaskById, updateTask, deleteTask } = require('../controllers/tasksController');

router.post('/new-task', createTask);
router.get('/get-task', getTask);
router.get('/get-task/:id', getTaskById);
router.put('/update-task/:id', updateTask);
router.delete('/delete-task/:id', deleteTask);

module.exports = router;