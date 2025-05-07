/** @format */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const loginLimiter = require('../middleware/rateLimit');
const router = express.Router();

router.post('/users/auth/register', registerUser);
router.post('/users/auth/login', loginLimiter, loginUser);

module.exports = router;
