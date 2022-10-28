const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  const validateCategory = await Category.findAll({ where: { id: categoryIds } });

  if (categoryIds.length !== validateCategory.length) {
    const error = new Error('one or more "categoryIds" not found');
    error.name = 'Bad Request';
    throw error;
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

module.exports = {
  createPost,
  getAllPosts,
};