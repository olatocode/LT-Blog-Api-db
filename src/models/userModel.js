/** @format */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// convert the schema to model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
