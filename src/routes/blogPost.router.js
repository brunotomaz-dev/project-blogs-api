const express = require('express');
const BlogPostsController = require('../controllers/blogPost.controller');
const { authToken } = require('../middleware/authToken.middleware');

const router = express.Router();

router.post('/', authToken, BlogPostsController.createPost);
router.get('/', authToken, BlogPostsController.getAllPosts);

module.exports = router;