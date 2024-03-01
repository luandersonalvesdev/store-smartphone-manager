const { Product, sequelize } = require('../models');
const singleProductSchema = require('../validations/joi/singleProductSchema.joi');
const multipleProductSchema = require('../validations/joi/multipleProductSchema.joi');
const {
  httpResponseMapper, SUCCESS, BAD_REQUEST, CREATED,
} = require('../utils/httpResponseMapper');

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

function formatProductsFromArray(products, userId) {
  const formattedProducts = [];

  products.forEach((product) => {
    product.data.forEach((details) => {
      const newItem = {
        name: product.name,
        brand: product.brand,
        model: product.model,
        price: details.price,
        color: details.color,
        userId,
      };

      formattedProducts.push(newItem);
    });
  });

  return formattedProducts;
}

const createProductsFromArray = async (products, userId) => {
  const { error } = multipleProductSchema.validate(products);
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: { error: 'Data validation', message: error.message },
    };
  }

  const formattedProducts = formatProductsFromArray(products, userId);

  const createdProducts = await sequelize.transaction(async (transaction) => {
    const promises = formattedProducts.map(async (prod) => Product.create(prod, { transaction }));

    const result = Promise.all(promises);

    return result;
  });

  return {
    status: httpResponseMapper(CREATED),
    data: createdProducts,
  };
};

const createProduct = async (user, product) => {
  if (Array.isArray(product)) {
    const { status, data } = await createProductsFromArray(product, user.id);
    return { status, data };
  }

  const { error } = singleProductSchema.validate(product);
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: { error: 'Data validation', message: error.message },
    };
  }

  const newProduct = {
    name: product.name,
    price: product.price,
    model: product.model || product.details.model,
    brand: product.brand || product.details.brand,
    color: product.color || product.details.color,
    userId: user.id,
  };

  const productCreated = await Product.create(newProduct);

  return {
    status: httpResponseMapper(CREATED),
    data: productCreated,
  };
};

module.exports = {
  getAllProducts,
  createProduct,
};
