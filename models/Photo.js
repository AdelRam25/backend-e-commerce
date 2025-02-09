const mongoose = require("mongoose");

module.exports = mongoose.model("Photo", {
  name: String,
  description: String,
  category: String,
  photo:  String
});
