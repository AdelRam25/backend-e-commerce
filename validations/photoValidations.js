const joi = require('joi')

exports.createPhotoSchema = joi.object({
    name: joi.string().required(),
    description: joi.string(),
    category: joi.string().required(),

})


exports.updatePhotoSchema = joi.object({
    name: joi.string().required(),
    description: joi.string(),
    category: joi.string().required(),
   
})