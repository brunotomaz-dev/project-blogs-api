const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const categoryCreated = await categoriesService.createCategory(req.body);

  res.status(201).json(categoryCreated);
};

const getAll = async (req, res) => {
  const allCategories = await categoriesService.getAll();

  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAll,
};