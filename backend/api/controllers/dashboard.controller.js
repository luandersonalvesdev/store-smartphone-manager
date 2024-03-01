const { dashboardService } = require('../services');

const getAllProducts = async (req, res) => {
  const { user } = req.payload;
  const { status, data } = await dashboardService.getAllProducts(user);
  return res.status(status).json(data);
};

const createProduct = async (req, res) => {
  const { user } = req.payload;
  const products = req.body;
  const { status, data } = await dashboardService.createProduct(user, products);
  return res.status(status).json(data);
};

module.exports = {
  getAllProducts,
  createProduct,
};
