const { dashboardService } = require('../services');

const getAllProducts = async (req, res) => {
  const { user } = req.payload;
  const { status, data } = await dashboardService.getAllProducts(user);
  return res.status(status).json(data);
};

const createProduct = async (req, res) => {
  const { user } = req.payload;
  const product = req.body;
  const { status, data } = await dashboardService.createProduct(user, product);
  return res.status(status).json(data);
};

const updateProduct = async (req, res) => {
  const { user } = req.payload;
  const product = req.body;
  const { status, data } = await dashboardService.updateProduct(user, product);
  return res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { user } = req.payload;
  const { id } = req.params;
  const { status, data } = await dashboardService.deleteProduct(user, id);
  return res.status(status).json(data);
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
