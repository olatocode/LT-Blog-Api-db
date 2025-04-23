/** @format */

const express = require('express');
const {
  allPost,
  addPost,
  getAPost,
  updatePost,
  deletePost,
} = require('../controllers/post');
const { validatePost, validateErrors } = require('../validation/post');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/posts', authenticateJWT, allPost);
router.post('/posts', validatePost, authenticateJWT, validateErrors, addPost);
router.get('/posts/:id', getAPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
