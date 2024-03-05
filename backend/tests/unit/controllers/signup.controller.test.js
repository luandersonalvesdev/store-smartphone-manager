const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { signupService } = require('../../../api/services');
const { signupController } = require('../../../api/controllers');
const { 
  SIGNUP_SUCCESS_RESPONSE_MOCK, USER_FORM_MOCK, SIGNUP_ERROR_USER_FORM_MOCK, SIGNUP_ERROR_CONFLICT_MOCK
} = require('../../mocks/user.mock')

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

describe('UNIT - Signup Controller', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('SUCCESS signup', async () => {
    sinon.stub(signupService, 'createAccout').resolves(SIGNUP_SUCCESS_RESPONSE_MOCK);

    const req = { body: { USER_FORM_MOCK } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await signupController.createAccout(req, res);

    expect(res.status).to.have.been.calledWith(SIGNUP_SUCCESS_RESPONSE_MOCK.status);
    expect(res.json).to.have.been.calledWith(SIGNUP_SUCCESS_RESPONSE_MOCK.data);
  });

  it('DATA VALIDATION ERROR signup', async () => {
    sinon.stub(signupService, 'createAccout').resolves(SIGNUP_ERROR_USER_FORM_MOCK);

    const req = { body: { USER_FORM_MOCK } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await signupController.createAccout(req, res);

    expect(res.status).to.have.been.calledWith(SIGNUP_ERROR_USER_FORM_MOCK.status);
    expect(res.json).to.have.been.calledWith(SIGNUP_ERROR_USER_FORM_MOCK.data);
  });

  it('CONFLICT signup', async () => {
    sinon.stub(signupService, 'createAccout').resolves(SIGNUP_ERROR_CONFLICT_MOCK);

    const req = { body: { USER_FORM_MOCK } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await signupController.createAccout(req, res);

    expect(res.status).to.have.been.calledWith(SIGNUP_ERROR_CONFLICT_MOCK.status);
    expect(res.json).to.have.been.calledWith(SIGNUP_ERROR_CONFLICT_MOCK.data);
  });
});
