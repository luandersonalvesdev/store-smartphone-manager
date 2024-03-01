const { loginService } = require('../services');

const logInto = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await loginService.logInto(username, password);
  return res.status(status).json(data);
};

module.exports = {
  logInto,
};
