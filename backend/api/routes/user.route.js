const express = require('express');
const { userController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/', jwtValidation, userController.findUser);

module.exports = route;
