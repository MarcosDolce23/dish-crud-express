var express = require('express');
var router = express.Router();
var { Dish } = require('../models/Dish');

/* GET dishes listing. */
router.get('/', async function (req, res, next) {
  try {
    const allDishes = await Dish.find();
    res.send(allDishes.sort((a, b) => {
      let fa = a.esName.toLocaleLowerCase(),
        fb = b.esName.toLocaleLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    }));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    res.send(dish);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newDish = new Dish({ ...req.body });
    const insertedDish = await newDish.save();
    res.send(insertedDish);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Dish.updateOne({ _id: id }, req.body);
    const updatedDish = await Dish.findById(id);
    res.send(updatedDish);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    res.send(deletedDish);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
