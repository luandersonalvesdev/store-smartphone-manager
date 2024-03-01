const {
  httpResponseMapper, SUCCESS,
} = require('../utils/httpResponseMapper');
const { Product } = require('../models');

const getAllProducts = async (user) => {
  const userId = user.id;

  const products = await Product.findAll({
    where: { userId },
    attributes: { exclude: ['userId'] },
  });

  return {
    status: httpResponseMapper(SUCCESS),
    data: products,
  };
};

module.exports = {
  getAllProducts,
};
