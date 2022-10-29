const express = require('express');
const BlogPostsController = require('../controllers/blogPost.controller');
const { authToken } = require('../middleware/authToken.middleware');

const router = express.Router();

router.post('/', authToken, BlogPostsController.createPost);
router.get('/', authToken, BlogPostsController.getAllPosts);
router.get('/:id', authToken, BlogPostsController.getById);
router.put('/:id', authToken, BlogPostsController.updatePost);

module.exports = router;