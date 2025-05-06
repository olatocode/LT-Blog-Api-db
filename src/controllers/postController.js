/** @format */
const Post = require('../models/postModel');
// view all posts logic/endpoint
const allPost = async (req, res) => {
  try {
    // all post
    const allPost = await Post.find();
    if (!allPost.length) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Post not found' });
    }

    // return res.status(200).json({
    //   status: 'success',
    //   message: 'All posts view successfully',
    //   data: allPost,
    // });
      return res.send(allPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content,author } = req.body;
    // Post.create(req.body);
    // create a new post
    const newPost = await Post.create({ title, content, author });

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
      return res
        .status(404)
        .json({ status: 'error', message: 'Post not found' });
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

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!post)
      return res
        .status(404)
        .json({ status: 'error', message: 'Post not found' });

    return res.status(200).json({
      status: 'success',
      message: 'Post updated successfully',
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post)
      return res
        .status(404)
        .json({ status: 'error', message: 'post not found' });

    return res
      .status(200)
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
