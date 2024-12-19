const express = require('express')
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router()


router.get('/user', authMiddleware ,userController.getUsers);
router.post('/user', authMiddleware ,userController.addUser);
router.get('/user/:id', authMiddleware, userController.viewUser);
router.put('/user/:id', authMiddleware ,userController.updateUser);
router.delete('/user/:id', authMiddleware, userController.deleteUser);
router.post('/login', userController.login)

module.exports= router