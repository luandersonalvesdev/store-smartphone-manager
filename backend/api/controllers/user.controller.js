const { userService } = require('../services');

const findUser = async (req, res) => {
  const { user } = req.payload;
  const { status, data } = await userService.findUser(user.id);
  return res.status(status).json(data);
};

module.exports = {
  findUser,
};
