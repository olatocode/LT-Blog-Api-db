/** @format */
const Post = require('../models/postModel');
// view all posts logic/endpoint
const allPost = async (req, res) => {
  try {
    // all post
    const allPost = await Post.find();

    return res.status(200).json({
      status: 'success',
      message: 'All posts view successfully',
      data: allPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    // Post.create(req.body);
    // create a new post
    const newPost = await Post.create({ title, content });

    res.status(201).json({
      status: 'success',
      message: 'Posts created successfully',
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ status: 'error', message: 'Post not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Post view successfully',
      data: post,
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const updatePost = (req, res) => {
  try {
    const post = posts.find((r) => r.id === parseInt(req.params.id));
    if (!post)
      return res
        .status(404)
        .json({ status: 'error', message: 'Post not found' });

    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;

    res.status(200).json({
      status: 'success',
      message: 'Post updated successfully',
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const deletePost = (req, res) => {
  try {
    const post = posts.findIndex((m) => m.id === parseInt(req.params.id));
    if (!post)
      return res
        .status(404)
        .json({ status: 'error', message: 'post not found' });

    posts.splice(post, 1);
    res
      .status(204)
      .json({ status: 'success', message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  allPost,
  addPost,
  getAPost,
  updatePost,
  deletePost,
};
