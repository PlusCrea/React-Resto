const mongoose = require("mongoose");

function getMoney(value) {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
}

const menuSchema = mongoose.Schema({
  category: String,
  title: String,
  desc: String,
  price: {
    type: mongoose.Schema.Types.Decimal128,
    get: getMoney,
  },
  photo: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Menu", menuSchema);
