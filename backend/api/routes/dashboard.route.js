const express = require('express');
const { dashboardController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/product', jwtValidation, dashboardController.getAllProducts);

module.exports = route;
