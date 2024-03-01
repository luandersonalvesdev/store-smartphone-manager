const { dashboardService } = require('../services');

const getAllProducts = async (req, res) => {
  const { user } = req.payload;
  const { status, data } = await dashboardService.getAllProducts(user);
  return res.status(status).json(data);
};

module.exports = {
  getAllProducts,
};
