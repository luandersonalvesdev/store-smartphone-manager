const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { loginService } = require('../../../api/services');
const { loginController } = require('../../../api/controllers');
const { 
  USER_FORM_MOCK, LOGIN_SUCCESS_RESPONSE_MOCK, LOGIN_ERROR_NOT_FOUND_USER_MOCK, LOGIN_ERROR_NOT_FOUND_MOCK, LOGIN_ERROR_UNAUTHORIZED
} = require('../../mocks/user.mock')

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

describe('UNIT - Login Controller', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('SUCCESS login', async () => {
    sinon.stub(loginService, 'logInto').resolves(LOGIN_SUCCESS_RESPONSE_MOCK);

    const req = { body: { USER_FORM_MOCK } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await loginController.logInto(req, res);

    expect(res.status).to.have.been.calledWith(LOGIN_SUCCESS_RESPONSE_MOCK.status);
    expect(res.json).to.have.been.calledWith(LOGIN_SUCCESS_RESPONSE_MOCK.data);
  });

  it('UNAUTHORIZED login', async () => {
    sinon.stub(loginService, 'logInto').resolves(LOGIN_ERROR_UNAUTHORIZED);

    const req = { body: { USER_FORM_MOCK } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await loginController.logInto(req, res);

    expect(res.status).to.have.been.calledWith(LOGIN_ERROR_UNAUTHORIZED.status);
    expect(res.json).to.have.been.calledWith(LOGIN_ERROR_UNAUTHORIZED.data);
  });
});
