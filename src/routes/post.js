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
const router = express.Router();

router.get('/posts', allPost);
router.post('/posts', validatePost, validateErrors, addPost);
router.get('/posts/:id', getAPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
