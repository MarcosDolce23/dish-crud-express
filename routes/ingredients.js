var express = require('express');
var router = express.Router();
var { Ingredient } = require('../models/Ingredient');

/* GET  listing. */
router.get("/", async (req, res, next) => {
    try {
        const all = await Ingredient.find();
        res.send(all);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const ingredient = await Ingredient.findById(id);
        res.send(ingredient);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newIngredient = new Ingredient({ ...req.body });
        const insertedIngredient = await newIngredient.save();
        res.send(insertedIngredient);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await Ingredient.updateOne({ _id: id }, req.body);
        const updatedIngredient = await Ingredient.findById(id);
        res.send(updatedIngredient);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedIngredient = await Ingredient.findByIdAndDelete(id);
        res.send(deletedIngredient);
    } catch (err) {
        next(err);
    }
});