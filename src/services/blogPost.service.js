const { BlogPost, PostCategory, sequelize } = require('../models');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  // validar campos e verificar se id de categoria é válido

  try {
    const allQueries = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({
        title,
        content,
        userId: id,
      }, { transaction: t });

      const categoryWithAllIds = categoryIds.map((item) => ({ categoryId: item, postId: post.id }));

      await PostCategory.bulkCreate({ categoryWithAllIds }, { transaction: t });

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