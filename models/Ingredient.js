const mongoose = require('mongoose');

let IngredientSchema = new mongoose.Schema({
  esName: {
    type: String,
  },
  enName: {
    type: String,
  },
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = { Ingredient };