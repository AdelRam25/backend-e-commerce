const Photo = require("../models/Photo")
const photoResource = require("../resources/photoResource")
const { createPhotoSchema } = require("../validations/photoValidations")

exports.getPhotos = async (req, res, next) => {
    const filters = {}

    if(req.query.category) {
        filters.category = req.query.category
    }

    if(req.query.name) {
        filters.name = {$regex: `.*${req.query.name}.*`, $options: 'i'}
    }

    const sort = {}

    if(req.query.sortBy && req.query.sortDirection) {
        
        sort[req.query.sortBy] = parseInt(req.query.sortDirection)
    }

    try {
        const photos = await Photo.find(filters).sort(sort) 
        return res.json(photos.map(photo => photoResource(photo)))
    }
    catch (e) {
        next(e)
    }
}

exports.createPhoto = async (req, res, next) => {
    try {
        if(!req.file) {
            return res.status(422).json({message: 'The photo is required'})
        }
     
        const photo = await Photo.create({
            name: req.body.name,
            photo: req.file.path,
            description: req.body.description,
            category: req.body.category,
            aperture: req.body.aperture,
            time: req.body.time

        })

        return res.status(201).json(photoResource(photo))
    } catch (e) {
        next(e)
    }
}

exports.getPhoto = async (req, res, next) => {
    try {
        const photo = await Photo.findById(req.params.id)
        return photo ? res.json(photoResource(photo)) : res.status(404).json({ message: 'Photo not found' })
    } catch (e) {
        next(e)
    }
}

exports.updatePhoto = async (req, res, next) => {
    try {
        if(!req.file) {
            return res.status(422).json({message: 'The photo is required'})
        }
        
        const photo = await Photo.findById(req.params.id)

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' })
        }

        const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            photo: req.file.path,
            description: req.body.description,
            category: req.body.category,
            aperture:req.body.aperture,
            time:req.body.time
        }, { new: true })

        return res.json(photoResource(updatedPhoto))
    } catch (e) {
        next(e)
    }
}

exports.deletePhoto = async (req, res, next) => {
    try {
        const photo = await Photo.findById(req.params.id)

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' })
        }

        await photo.deleteOne()

        return res.json({message: 'Photo deleted successfully'})
    } catch (e) {
        next(e)
    }
}