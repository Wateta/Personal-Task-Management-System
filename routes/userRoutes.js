const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middlewaare/authmiddleware');

router.use(verifyToken, isAdmin);
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);
module.exports=router;