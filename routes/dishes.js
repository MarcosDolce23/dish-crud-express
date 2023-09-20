var express = require('express');
var router = express.Router();
var { Dish } = require('../models/Dish');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const allDishes = await Dish.find();
    res.send(allDishes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
