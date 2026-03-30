const express=require('express');
const router=express.Router();
const taskController=require('../controllers/taskController');
const { verifyToken } = require('../middlewaare/authmiddleware');

router.use(verifyToken);
router.get('/',taskController.getAllTasks);
router.get('/:id',taskController.getTaskById);
router.post('/',taskController.createTask);
router.put('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);
module.exports=router;