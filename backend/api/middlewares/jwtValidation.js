const { getPayload } = require('../auth/authToken');
const { httpResponseMapper, UNAUTHORIZED } = require('../utils/httpResponseMapper');

const jwtValidation = (req, res, next) => {
  try {
    const { authorization: auth } = req.headers;
    if (!auth) {
      return res.status(httpResponseMapper(UNAUTHORIZED)).json({
        error: 'Unauthorized',
        message: 'Token not found',
      });
    }

    const payload = getPayload(auth);
    req.payload = payload;
    next();
  } catch (error) {
    return res.status(httpResponseMapper(UNAUTHORIZED)).json({
      error: 'Unauthorized',
      message: 'Expired or invalid token',
    });
  }
  return null;
};

module.exports = {
  jwtValidation,
};
