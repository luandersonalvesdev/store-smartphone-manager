const signupSchema = require('../validations/joi/loginSchema.joi');
const { generateToken } = require('../auth/authToken');
const { generateHashPass } = require('../validations/bcrypt/passwordValidator.bcrypt');
const { User, Sequelize } = require('../models');
const {
  httpResponseMapper, CREATED, BAD_REQUEST, CONFLICT,
} = require('../utils/httpResponseMapper');

const createAccout = async (username, password) => {
  const { error } = signupSchema.validate({ username, password });
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: {
        error: 'Validation error',
        message: error.message,
      },
    };
  }

  const hashedPass = await generateHashPass(password);

  const [userExists, created] = await User.findOrCreate({
    where: {
      username: {
        [Sequelize.Op.iLike]: username,
      },
    },
    defaults: { username, password: hashedPass },
  });

  if (!created) {
    return {
      status: httpResponseMapper(CONFLICT),
      data: {
        error: 'Conflict',
        message: 'Username already registered',
      },
    };
  }

  const user = { id: userExists.id, username };

  const userPayload = {
    id: user.id,
    username,
  };

  const token = generateToken({ user: userPayload });

  return {
    status: httpResponseMapper(CREATED),
    data: { ...userPayload, token },
  };
};

module.exports = {
  createAccout,
};
