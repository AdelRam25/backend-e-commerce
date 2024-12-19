const express = require('express')
const commandController = require('../controllers/commandController')
const router = express.Router()


router.get('/command', commandController.getCommands);
router.post('/command', commandController.addCommand);
router.get('/command/:id', commandController.viewCommand);
router.delete('/command/:id', commandController.deleteCommand);

module.exports= router