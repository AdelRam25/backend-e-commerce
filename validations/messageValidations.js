const joi = require('joi');

exports.createMessageSchema = joi.object({
  email: joi.string().email().required(),
  nom: joi.string().optional(),
  prenom: joi.string().required(), 
  message: joi.string().required(), 
  date: joi.date().iso().required(), 
});
