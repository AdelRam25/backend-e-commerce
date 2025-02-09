const express = require('express')
const messageController = require('../controllers/messageController')
const router = express.Router()


router.get('/message', messageController.getMessages);
router.post('/message', messageController.addMessage);
router.get('/message/:id', messageController.viewMessage);
router.delete('/message/:id', messageController.deleteMessage);

module.exports= router