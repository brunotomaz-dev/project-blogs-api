const { Category } = require('../models');

const createCategory = async ({ name }) => {
  if (!name) {
    const error = new Error('"name" is required');
    error.name = 'Bad Request';
    throw error;
  }
 
  const [category, created] = await Category.findOrCreate({
    where: { name },
  });

  if (!created) {
    const error = new Error('Category already registered');
    error.name = 'Conflict';
    throw error;
  }

  return category;
};

module.exports = {
  createCategory,
};