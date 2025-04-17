/** @format */

const express = require('express');
const {
register
} = require('../controllers/user');
const router = express.Router();


router.post('/users/auth/register', register);


module.exports = router;
