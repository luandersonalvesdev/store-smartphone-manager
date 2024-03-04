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
  USER_FROM_DB_MOCK, USER_FORM_MOCK, INVALID_USER_FORM_MOCK, TOKEN_MOCK, SIGNUP_SUCCESS_RESPONSE_MOCK, 
  SIGNUP_ERROR_USER_FORM_MOCK, SIGNUP_ERROR_CONFLICT_MOCK,
} = require('../mocks/user.mock');


chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

describe('Signup tests.', function() {

  afterEach(function () {
    sinon.restore();
  });

  it('SUCCESS signup.', async function() {
    sinon.stub(User, 'findOrCreate').resolves([USER_FROM_DB_MOCK, true]);
    sinon.stub(bcrypt, 'hashSync').resolves("HASHEDPASS");
    sinon.stub(jwt, 'sign').returns(TOKEN_MOCK);

    const response = await chai.request(app)
      .post('/signup')
      .send(USER_FORM_MOCK);

    expect(response.status).to.be.equal(SIGNUP_SUCCESS_RESPONSE_MOCK.status);
    expect(response.body).to.be.deep.equal(SIGNUP_SUCCESS_RESPONSE_MOCK.data);
  });

  it('BAD REQUEST Data validation.', async function() {
    sinon.stub(loginSchema, 'validate').returns(SIGNUP_ERROR_USER_FORM_MOCK.data);

    const response = await chai.request(app)
      .post('/signup')
      .send(INVALID_USER_FORM_MOCK);

    expect(response.status).to.be.equal(SIGNUP_ERROR_USER_FORM_MOCK.status);
    expect(response.body).to.be.deep.equal(SIGNUP_ERROR_USER_FORM_MOCK.data);
  });

  it('CONFLICT User already exists.', async function() {
    sinon.stub(User, 'findOrCreate').resolves([, false]);
    sinon.stub(bcrypt, 'hashSync').resolves("HASHEDPASS");

    const response = await chai.request(app)
      .post('/signup')
      .send(USER_FORM_MOCK);

    expect(response.status).to.be.equal(SIGNUP_ERROR_CONFLICT_MOCK.status);
    expect(response.body).to.be.deep.equal(SIGNUP_ERROR_CONFLICT_MOCK.data);
  });
});

