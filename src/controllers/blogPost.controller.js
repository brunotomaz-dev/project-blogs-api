const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    const error = new Error('Some required fields are missing');
    error.name = 'Bad Request';
    throw error;
  }

  const newPost = await blogPostService.createPost(req.body, req.user);

  res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const getAll = await blogPostService.getAllPosts();

  res.status(200).json(getAll);
};

module.exports = {
  createPost,
  getAllPosts,
};