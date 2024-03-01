const bcrypt = require('bcryptjs');

const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

const generateHashPass = async (password) => bcrypt.hashSync(password, saltRounds);

const validateHashPass = (pass, hashedPass) => bcrypt.compareSync(pass, hashedPass);

module.exports = {
  generateHashPass,
  validateHashPass,
};
