/** @format */
const Post = require('../models/postModel');
// view all posts logic/endpoint
const allPost = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const options = {
      page,
      limit,
      sort: { createdAt: -1 }, 
    };

    const result = await Post.paginate({}, options);

    if (!result.docs.length) {
      return res.status(404).json({
        status: 'error',
        message: 'No posts found',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'All posts retrieved successfully',
      data: result.docs,
      totalPost: result.totalDocs,
      totalPages: result.totalPages,
      currentPage: result.page,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
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
