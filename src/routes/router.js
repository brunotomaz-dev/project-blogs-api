const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
// const authMiddleware = require('../middleware/authToken.middleware');

const routers = express.Router();

routers.use('/login', authRouter);
// routers.use(authMiddleware.authToken);
routers.use('/user', userRouter);
routers.use('/categories', categoriesRouter);

module.exports = routers;