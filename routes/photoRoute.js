const express = require('express')
const photoController = require('../controllers/photoController')
const multer = require ('multer')
const upload = multer ({dest : './public'})
const router = express.Router()


router.get('/photo', photoController.getPhotos);
router.post('/photo', upload.single('image'), photoController.addPhoto);
router.get('/photo/:id', photoController.viewPhoto);
router.put('/photo/:id', photoController.updatePhoto);
router.delete('/photo/:id', photoController.deletePhoto);

module.exports= router