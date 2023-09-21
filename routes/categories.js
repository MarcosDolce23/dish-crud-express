var express = require('express');
var router = express.Router();
var { Category } = require('../models/Category');

/* GET categories listing. */
router.get("/", async (req, res, next) => {
    try {
        const allCategories = await Category.find();
        res.send(allCategories.sort((a, b) => {
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
        const category = await Category.findById(id);
        res.send(category);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newCategory = new Category({ ...req.body });
        const insertedCategory = await newCategory.save();
        res.send(insertedCategory);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await Category.updateOne({ _id: id }, req.body);
        const updatedCategory = await Category.findById(id);
        res.send(updatedCategory);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.send(deletedCategory);
    } catch (err) {
        next(err);
    }
});

module.exports = router;