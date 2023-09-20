var express = require('express');
var router = express.Router();
var { Category } = require('../models/Category');

/* GET categories listing. */
app.get("/", async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.send(allCategories);
    } catch (err) {
        next(err);
    }
});

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        res.send(category);
    } catch (err) {
        next(err);
    }
});

app.post("/", async (req, res) => {
    try {
        const newCategory = new Category({ ...req.body });
        const insertedCategory = await newCategory.save();
        res.send(insertedCategory);
    } catch (err) {
        next(err);
    }
});

app.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Category.updateOne({ _id: id }, req.body);
        const updatedCategory = await Category.findById(id);
        res.send(updatedCategory);
    } catch (err) {
        next(err);
    }
});

app.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.send(deletedCategory);
    } catch (err) {
        next(err);
    }
});