var express = require('express');
var router = express.Router();
var { User } = require('../models/User');

router.get("/", async (req, res, next) => {
    try {
        const user = await User.find({ user: req.body.user, password: req.body.password });
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;