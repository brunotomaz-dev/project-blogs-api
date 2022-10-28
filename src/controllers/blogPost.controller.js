const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const newPost = await blogPostService.createPost(req.body, req.user);

  res.status(201).json(newPost);
};

module.exports = {
  createPost,
};