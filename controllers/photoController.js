const Photo = require('../models/Photo');

exports.getPhotos = async (req, res) => {
    const Photos = await Photo.find();
  res.json(Photos)
};


exports.addPhoto = async (req, res) => {
  
    const photo = await Photo.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        category : req.body.category,
        photo :req.body.photo
    });
   res.json(photo)}

exports.viewPhoto = async(req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.json(photo)
};

exports.updatePhoto = async(req, res) => {
    const photo = await Photo.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        category :req.body.category,
        image : req.body.image
    } , {new : true});
    res.json(photo)
};

exports.deletePhoto = async(req, res) => {
    await Photo.findByIdAndDelete(req.params.id);
    res.json({message : 'Deleted succefully'})
};