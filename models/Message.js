const mongoose = require("mongoose");

module.exports = mongoose.model("Message", {
  email: String,
  nom: String,
  prenom: String,
  message: String,
  date: Date,
});
