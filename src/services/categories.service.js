const { Category } = require('../models');
const { newError } = require('./validations/newError');

const createCategory = async ({ name }) => {
  if (!name) {
    newError('Bad Request', '"name" is required');
  }
 
  const [category, created] = await Category.findOrCreate({
    where: { name },
  });

  if (!created) {
    newError('Conflict', 'Category already registered');
  }

  return category;
};

const getAll = async () => Category.findAll();

module.exports = {
  createCategory,
  getAll,
};