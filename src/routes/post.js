/** @format */

const express = require('express');
const {
  allPost,
  addPost,
  getAPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { validatePost, validateErrors } = require('../validation/post');
const { authenticate, authorize} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/posts', allPost);
router.post('/posts', validatePost, authenticate, authorize('admin') ,validateErrors, addPost);
router.get('/posts/:id', authenticate, getAPost);
router.patch('/posts/:id', authenticate, authorize('admin'), updatePost);
router.delete('/posts/:id', authenticate, authorize('admin'), deletePost);

module.exports = router;


