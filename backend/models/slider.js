const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sliderSchema = new Schema({
  title: String,
  desc: String,
  buttonText: String,
  buttonLink: String,
  photo: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Slider", sliderSchema);
