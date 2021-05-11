const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  photo: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
