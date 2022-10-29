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

const getById = async (req, res) => {
  const byId = await blogPostService.getById(req.params);

  res.status(200).json(byId);
};

const updatePost = async (req, res) => {
  const update = await blogPostService.updatePost(req.body, req.params, req.user);

  res.status(200).json(update);
};

const deletePost = async (req, res) => {
  await blogPostService.deletePost(req.params, req.user);

  res.status(204).json();
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePost,
  deletePost,
};