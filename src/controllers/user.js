/** @format */
const User = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { firstname, lastname, phone_no, gender, email, password } = req.body;
    //
    // create a new post
    const newUser = await User.create({
      firstname,
      lastname,
      phone_no,
      gender,
      email,
      password,
    });

    res.status(201).json({
      status: 'success',
      message: 'Registration created successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  register,
};
