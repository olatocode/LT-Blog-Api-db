const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  phone_no: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// convert the schema to model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;