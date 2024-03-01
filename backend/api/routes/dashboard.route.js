const express = require('express');
const { dashboardController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/product', jwtValidation, dashboardController.getAllProducts);
route.post('/product', jwtValidation, dashboardController.createProduct);
route.put('/product', jwtValidation, dashboardController.updateProduct);
route.delete('/product/:id', jwtValidation, dashboardController.deleteProduct);

module.exports = route;
