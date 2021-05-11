const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: String,
  title: String,
  desc: String,
  active: Boolean,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Review", reviewSchema);
