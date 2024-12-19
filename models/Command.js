const mongoose = require("mongoose");

module.exports = mongoose.model("Command", {
  date: Date,
  products: [],
});
