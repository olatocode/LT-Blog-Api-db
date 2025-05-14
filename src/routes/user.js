/** @format */

const express = require('express');
const {
  registerUser,
  loginUser,
  verifyEmailToken,
} = require('../controllers/authController');
const loginLimiter = require('../middleware/rateLimit');
const router = express.Router();

router.post('/users/auth/register', registerUser);
router.post('/users/auth/login', loginUser, loginLimiter);
router.get('/users/auth/verify/:token', verifyEmailToken);

module.exports = router;
