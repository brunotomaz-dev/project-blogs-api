const { BlogPost, PostsCategory, Category, sequelize } = require('../models');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  const validateCategory = await Category.findAll({ where: { id: categoryIds } });

  if (categoryIds.length !== validateCategory.length) {
    const error = new Error('one or more "categoryIds" not found');
    error.name = 'Bad Request';
    throw error;
  }

  try {
    const allQueries = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });

      const categoryWithAllIds = categoryIds.map((item) => ({ categoryId: item, postId: post.id }));

      await PostsCategory.bulkCreate(categoryWithAllIds, { transaction: t });

      return post;
    });

    return allQueries;
  } catch (error) {
    error.name = '';
    throw error;
  }
};

module.exports = {
  createPost,
};