const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
    const Messages = await Message.find();
  res.json(Messages)
};


exports.addMessage= async (req, res) => {
  const message = await Message.create({
    email:req.body.email,
    nom : req.body.nom,
    prenom : req.body.prenom,
   message: req.body.message,
   date: new Date()
  });
  res.json(message);
};

exports.viewMessage= async(req, res) => {
    const message = await Message.findById(req.params.id);
    res.json(message)
};

exports.deleteMessage = async(req, res) => {
    await Message.findByIdAndDelete(req.params.id);
    res.json({message : 'Deleted succefully'})
};