const express = require('express');
const authToken = require('../middleware/authToken.middleware');
const CategoriesController = require('../controllers/categories.controller');

const router = express.Router();

router.post('/', authToken, CategoriesController.createCategory);

module.exports = router;