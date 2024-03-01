const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
const configJWT = { algorithm: 'HS256', expiresIn: '30d' };

const generateToken = (payload) => jwt.sign(payload, secret, configJWT);

const getPayload = (authorization) => {
  const [, token] = authorization.split(' ');
  return jwt.verify(token, secret);
};

module.exports = {
  generateToken,
  getPayload,
};
