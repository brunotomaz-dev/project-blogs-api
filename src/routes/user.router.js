const express = require('express');
const UserController = require('../controllers/user.controller');
const authToken = require('../middleware/authToken.middleware');

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', authToken, UserController.getAll);
router.get('/:id', authToken, UserController.findById);

module.exports = router;