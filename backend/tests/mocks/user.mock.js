const USERNAME_MOCK = 'test';
const PASSWORD_MOCK = 'password';
const ID_MOCK = 1;
const TOKEN_MOCK = 'token.token.token';
const IAT_MOCK = 1709268672;
const EXP_MOCK = 1711860672;

const USER_FROM_DB_MOCK = {
  id: ID_MOCK,
  username: USERNAME_MOCK,
  password: PASSWORD_MOCK,
};

const USER_FORM_MOCK = {
  username: USERNAME_MOCK,
  password: PASSWORD_MOCK,
};

const USER_PAYLOAD_RETURN_MOCK = { 
  user: {
    id: ID_MOCK,
    username: USERNAME_MOCK
  },
  iat: IAT_MOCK, 
  exp: EXP_MOCK,
}

const INVALID_USER_FORM_MOCK = {
  username: '',
  password: '',
};

const WRONG_PASSWORD_FORM_MOCK = {
  username: USERNAME_MOCK,
  password: 'drowssap',
};

const LOGIN_SUCCESS_RESPONSE_MOCK = {
  status: 200,
  data: {
    id: ID_MOCK,
    token: TOKEN_MOCK,
    username: USERNAME_MOCK,
  },
}

const LOGIN_ERROR_USER_FORM_MOCK = {
  status: 400,
  data: {
    error: 'Data validation',
  },
}

const LOGIN_ERROR_NOT_FOUND_USER_MOCK = {
  status: 404,
  data: { 
    error: 'Not found', 
    message: 'This username is not registered' 
  }
}

const SIGNUP_ERROR_USER_FORM_MOCK = {
  status: 400,
  data: {
    error: 'Validation error',
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

const SIGNUP_SUCCESS_RESPONSE_MOCK = {
  status: 201,
  data: {
    id: ID_MOCK,
    token: TOKEN_MOCK,
    username: USERNAME_MOCK,
  },
}

const SIGNUP_ERROR_CONFLICT_MOCK = {
  status: 409,
  data: {
    error: 'Conflict',
    message: 'Username already registered',
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
  TOKEN_MOCK,
  SIGNUP_SUCCESS_RESPONSE_MOCK,
  SIGNUP_ERROR_USER_FORM_MOCK,
  SIGNUP_ERROR_CONFLICT_MOCK,
  USER_PAYLOAD_RETURN_MOCK,
  LOGIN_ERROR_NOT_FOUND_USER_MOCK,
}