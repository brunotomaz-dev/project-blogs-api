const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');
const { newError } = require('./schemas/schema');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  const validateCategory = await Category.findAll({ where: { id: categoryIds } });

  if (categoryIds.length !== validateCategory.length) {
    newError('Bad Request', 'one or more "categoryIds" not found');
  }

  try {
    const newPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });

      const categoryWithAllIds = categoryIds.map((item) => ({ categoryId: item, postId: post.id }));

      await PostCategory.bulkCreate(categoryWithAllIds, { transaction: t });

      return post;
    });

    return newPost;
  } catch (error) {
    error.name = '';
    throw error;
  }
};

const getAllPosts = async () => {
  const getAll = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return getAll;
};

const getById = async ({ id }) => {
  const byId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!byId) {
    newError('Not Found', 'Post does not exist');
  }

  return byId;
};

const updatePost = async ({ title, content }, postId, userId) => {
  if (!title || !content) {
    newError('Bad Request', 'Some required fields are missing');
  }

  const update = await BlogPost
    .update({ title, content }, { where: { id: postId.id, userId: userId.id } });
  
  if (update[0] === 0) {
    newError('Unauthorized', 'Unauthorized user');
  }

  return getById(postId);
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
  updatePost,
};