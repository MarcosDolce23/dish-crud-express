const mongoose = require('mongoose');

let CategorySchema = new mongoose.Schema({
  esName: {
    type: String,
  },
  enName: {
    type: String,
  },
  ingredients: {
    type: Array,
  },
  image: {
    type: String,
  },
  base64Image: {
    type: String,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = { Category };