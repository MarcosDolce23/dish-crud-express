const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };