const User = require("../models/User");
const jwt = require('jsonwebtoken')

exports.getUsers = async (req, res) => {
  const Users = await User.find();
  res.json(Users);
};

exports.addUser = async (req, res) => {
  const user = await User.create({
    email : req.body.email,
    name : req.body.name,
   password: req.body.password
  });
  res.json(user);
};

exports.viewUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    email : req.body.email,
    name : req.body.name,
   password: req.body.password
  } , {new : true});
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({message : 'Deleted succefully'})
};

exports.login = async (req,res) => {
  const {email , password } = req.body;
  const user = await User.findOne({
    email ,
    password
  });
  if (user) {
    const token = jwt.sign({id : user._id} , 'ksdfksvnsdvisdvisdnpzsdfgnsoidhgskvgsoi')
    res.json({token})
  }
  else{
    res.status(400).json ({ message : " Wrong email or paswword "})
  }
}
