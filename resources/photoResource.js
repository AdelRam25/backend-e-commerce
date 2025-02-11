const { generateUrl } = require("../helpers/url")

module.exports = (photo) => {
  
    return {
      id: photo._id,
      name: photo.name,
      photo: generateUrl(photo.photo.replaceAll('\\', '/')),
      description: photo.description,
      category: photo.category,
      aperture : photo.aperture,
      time: photo.time
    };
  };