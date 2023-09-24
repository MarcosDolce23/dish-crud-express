var express = require('express');
var router = express.Router();
var { User } = require('../models/User');

router.post("/", async (req, res, next) => {
    try {
        console.log(req.body);
        const user = await User.find({ user: req.body.user, password: req.body.password });
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;