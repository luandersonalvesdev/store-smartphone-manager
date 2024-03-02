const { User } = require('../models');
const {
  httpResponseMapper, NOT_FOUND, SUCCESS,
} = require('../utils/httpResponseMapper');

const findUser = async (userId) => {
  const userFromDB = await User.findByPk(userId, {
    attributes: {
      exclude: ['password', 'id'],
    },
  });

  if (!userFromDB) {
    return {
      status: httpResponseMapper(NOT_FOUND),
      data: { error: 'Not found', message: 'This username is not registered' },
    };
  }

  return {
    status: httpResponseMapper(SUCCESS),
    data: userFromDB,
  };
};

module.exports = {
  findUser,
};
