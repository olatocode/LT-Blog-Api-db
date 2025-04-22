/** @format */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/user');
const router = express.Router();

router.post('/users/auth/register', registerUser);
router.post('/users/auth/login', loginUser);

module.exports = router;
