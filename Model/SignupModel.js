const mongoose = require("mongoose");
const validator = require('validator');
const userSignup = mongoose.Schema({
  usename: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    require: true,
    validate:{
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    }
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("User", userSignup);
