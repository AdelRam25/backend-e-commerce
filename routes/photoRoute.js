const express = require('express')
const multer = require('multer')
const photoController = require('../controllers/photoController')
const validationMiddleware = require('../middlewares/validationMiddleware')
const validObjectIdMiddleware = require('../middlewares/validObjectIdMiddleware')
 const {createPhotoSchema , updatePhotoSchema} = require('../validations/photoValidations')


const router = express.Router()

const upload = multer({ dest: './public/uploads' })

router.get('/photos', photoController.getPhotos)
router.post('/photos', upload.single('photo'), validationMiddleware(createPhotoSchema), photoController.createPhoto)
router.get('/photos/:id', validObjectIdMiddleware, photoController.getPhoto)
router.put('/photos/:id', upload.single('photo'), validObjectIdMiddleware, validationMiddleware(updatePhotoSchema), photoController.updatePhoto)
router.delete('/photos/:id', validObjectIdMiddleware, photoController.deletePhoto)




module.exports = router;