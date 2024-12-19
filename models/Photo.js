const mongoose = require("mongoose");

module.exports = mongoose.model("Photo", {
  name: String,
  price: Number,
  description: String,
  category: String,
  photo:  String
});
