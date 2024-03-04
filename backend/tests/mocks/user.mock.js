const USERNAME = 'test';
const PASSWORD = 'password';
const ID = 1;
const TOKEN = 'token';

const USER_FROM_DB_MOCK = {
  id: ID,
  username: USERNAME,
  password: PASSWORD,
};

const USER_FORM_MOCK = {
  username: USERNAME,
  password: PASSWORD,
};

const INVALID_USER_FORM_MOCK = {
  username: '',
  password: '',
};

const WRONG_PASSWORD_FORM_MOCK = {
  username: USERNAME,
  password: 'drowssap',
};

const LOGIN_SUCCESS_RESPONSE_MOCK = {
  status: 200,
  data: {
    id: ID,
    token: TOKEN,
    username: USERNAME,
  },
}

const LOGIN_ERROR_USER_FORM_MOCK = {
  status: 400,
  data: {
    error: 'Data validation',
  },
}

const LOGIN_ERROR_NOT_FOUND = {
  status: 404,
  data: {
    error: 'Not found',
    message: 'This username is not registered',
  },
}

const LOGIN_ERROR_UNAUTHORIZED = {
  status: 401,
  data: {
    error: 'Unauthorized',
    message: 'Password is wrong',
  },
}

module.exports = {
  USER_FROM_DB_MOCK,
  USER_FORM_MOCK,
  LOGIN_SUCCESS_RESPONSE_MOCK,
  INVALID_USER_FORM_MOCK,
  LOGIN_ERROR_USER_FORM_MOCK,
  LOGIN_ERROR_NOT_FOUND,
  WRONG_PASSWORD_FORM_MOCK,
  LOGIN_ERROR_UNAUTHORIZED,
}