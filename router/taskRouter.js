const {Router} = require('express')
const authMiddleware = require('../middleware/tokenMiddleware')
const {createATask, getAllTasks, getOneTask, updateTask, deleteTask} = require('../controller/taskController')

const router = Router()

router.post('/task', authMiddleware, createATask)
router.get('/tasks', getAllTasks)
router.get('/task/:id', getOneTask )
router.put('/task/:id', authMiddleware, updateTask)
router.delete('/task/:id', authMiddleware, deleteTask)

module.exports = router