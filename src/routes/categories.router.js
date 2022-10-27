const express = require('express');
const CategoriesController = require('../controllers/categories.controller');
const { authToken } = require('../middleware/authToken.middleware');

const router = express.Router();

router.post('/', authToken, CategoriesController.createCategory);
router.get('/', authToken, CategoriesController.getAll);

module.exports = router;