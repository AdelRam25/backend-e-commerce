const Command = require('../models/Command');

exports.getCommands = async (req, res) => {
    const Commands = await Command.find();
  res.json(Commands)
};


exports.addCommand = async (req, res) => {
  
    const command = await Command.create(Date.now());
   res.json(command)}

exports.viewCommand = async(req, res) => {
    const command = await Command.findById(req.params.id);
    res.json(command)
};

exports.deleteCommand = async(req, res) => {
    await Command.findByIdAndDelete(req.params.id);
    res.json({message : 'Deleted succefully'})
};