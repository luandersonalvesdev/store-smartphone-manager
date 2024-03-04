const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const app = require('../../api/app');
const { User } = require('../../api/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginSchema = require('../../api/validations/joi/loginSchema.joi');
const { 
  USER_FROM_DB_MOCK, USER_FORM_MOCK, LOGIN_SUCCESS_RESPONSE_MOCK, LOGIN_ERROR_USER_FORM_MOCK, INVALID_USER_FORM_MOCK, 
  LOGIN_ERROR_NOT_FOUND, LOGIN_ERROR_UNAUTHORIZED
} = require('../mocks/user.mock');

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

describe('User tests.', function() {

  afterEach(function () {
    sinon.restore();
  });

  it('SUCCESS find user.', async function() {
    sinon.stub(User, 'findOne').resolves(USER_FROM_DB_MOCK);
    sinon.stub(bcrypt, 'compareSync').resolves(true);
    sinon.stub(jwt, 'sign').returns(LOGIN_SUCCESS_RESPONSE_MOCK.data.token);

    const response = await chai.request(app)
      .post('/login')
      .send(USER_FORM_MOCK);

    expect(response.status).to.be.equal(LOGIN_SUCCESS_RESPONSE_MOCK.status);
    expect(response.body).to.be.deep.equal(LOGIN_SUCCESS_RESPONSE_MOCK.data);
  });

  it('BAD REQUEST Data validation.', async function() {
    sinon.stub(loginSchema, 'validate').returns(LOGIN_ERROR_USER_FORM_MOCK.data);

    const response = await chai.request(app)
      .post('/login')
      .send(INVALID_USER_FORM_MOCK);

    expect(response.status).to.be.equal(LOGIN_ERROR_USER_FORM_MOCK.status);
    expect(response.body).to.be.deep.equal(LOGIN_ERROR_USER_FORM_MOCK.data);
  });

  it('NOT FOUND Invalid user.', async function() {
    sinon.stub(User, 'findOne').resolves(null);

    const response = await chai.request(app)
      .post('/login')
      .send(USER_FORM_MOCK);

    expect(response.status).to.be.equal(LOGIN_ERROR_NOT_FOUND.status);
    expect(response.body).to.be.deep.equal(LOGIN_ERROR_NOT_FOUND.data);
  });

  it('UNAUTHORIZED Invalid password.', async function() {
    sinon.stub(User, 'findOne').resolves(USER_FROM_DB_MOCK);
    sinon.stub(bcrypt, 'compareSync').returns(false);

    const response = await chai.request(app)
      .post('/login')
      .send(USER_FORM_MOCK);

    expect(response.status).to.be.equal(LOGIN_ERROR_UNAUTHORIZED.status);
    expect(response.body).to.be.deep.equal(LOGIN_ERROR_UNAUTHORIZED.data);
  });
});

