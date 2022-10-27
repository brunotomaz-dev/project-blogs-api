const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const categoryCreated = await categoriesService.createCategory(req.body);

  res.status(201).json(categoryCreated);
};

module.exports = {
  createCategory,
};