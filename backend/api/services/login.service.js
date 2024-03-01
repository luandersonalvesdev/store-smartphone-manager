const loginSchema = require('../validations/joi/loginSchema.joi');
const { generateToken } = require('../auth/authToken');
const { validateHashPass } = require('../validations/bcrypt/passwordValidator.bcrypt');
const { User } = require('../models');
const {
  httpResponseMapper, BAD_REQUEST, NOT_FOUND, UNAUTHORIZED, SUCCESS,
} = require('../utils/httpResponseMapper');

const logInto = async (username, password) => {
  const { error } = loginSchema.validate({ username, password });
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: { error: 'Data validation', message: error.message },
    };
  }

  const userFromDB = await User.findOne({
    where: { username },
  });

  if (!userFromDB) {
    return {
      status: httpResponseMapper(NOT_FOUND),
      data: { error: 'Not found', message: 'This username is not registered' },
    };
  }

  if (!validateHashPass(password, userFromDB.password)) {
    return {
      status: httpResponseMapper(UNAUTHORIZED),
      data: { error: 'Unauthorized', message: 'Password is wrong' },
    };
  }

  const user = { id: userFromDB.id, username };

  const token = generateToken({ user });

  return {
    status: httpResponseMapper(SUCCESS),
    data: { ...user, token },
  };
};

module.exports = {
  logInto,
};
