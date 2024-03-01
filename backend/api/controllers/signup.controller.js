const { signupService } = require('../services');

const createAccout = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await signupService.createAccout(username, password);
  return res.status(status).json(data);
};

module.exports = {
  createAccout,
};
