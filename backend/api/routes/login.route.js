const express = require('express');
const { loginController } = require('../controllers');

const route = express.Router();

route.post('/', loginController.logInto);

module.exports = route;
