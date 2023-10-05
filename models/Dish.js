const mongoose = require('mongoose');

let DishSchema = new mongoose.Schema({
  esName: {
    type: String,
  },
  enName: {
    type: String,
  },
  esLabel: {
    type: String,
  },
  enLabel: {
    type: String,
  },
  vegan: {
    type: Boolean,
  },
  cookTime: {
    type: Number,
  },
  ingredients: {
    type: Array,
  },
  esQuantities: {
    type: Array,
  },
  enQuantities: {
    type: Array,
  },
  esRecipe: {
    type: Array,
  },
  enRecipe: {
    type: Array,
  },
  image: {
    type: String,
  },
  base64Image: {
    type: String,
  },
  headerImage: {
    type: String,
  },
  base64Header: {
    type: String,
  }
});

const Dish = mongoose.model("Dish", DishSchema);

module.exports = { Dish };