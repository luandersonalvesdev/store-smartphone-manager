const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { User } = require('../../api/models');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const {
  GET_ALL_PRODUCTS_ERROR_NOT_TOKEN, GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN,
} = require('../mocks/product.mock');
const {
  USER_PAYLOAD_RETURN_MOCK, TOKEN_MOCK, USER_NOT_FOUND_MOCK, USER_BY_PK, SUCCESS_USER_BY_PK_MOCK
} = require('../mocks/user.mock');

chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;

describe('User tests', function() {

  afterEach(() => {
    sinon.restore();
  });

  describe('TOKEN cases', function() {

    it('ERROR TOKEN not found', async function() {
      const response = await chai.request(app).get('/user');
  
      expect(response.status).to.be.equal(GET_ALL_PRODUCTS_ERROR_NOT_TOKEN.status);
      expect(response.body).to.be.deep.equal(GET_ALL_PRODUCTS_ERROR_NOT_TOKEN.data);
    });
  
    it('ERROR TOKEN invalid', async function() {
      const response = await chai.request(app)
        .get('/user')
        .set('Authorization', 'Baerer invalid.invalid.invalid');
  
      expect(response.status).to.be.equal(GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN.status);
      expect(response.body).to.be.deep.equal(GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN.data);
    });
  });

  describe('GET cases', function() {
    it('NOT FOUND user', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(User, 'findByPk').resolves(USER_BY_PK);
  
      const response = await chai.request(app)
        .get('/user')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`);

      expect(response.status).to.be.equal(SUCCESS_USER_BY_PK_MOCK.status);
      expect(response.body).to.be.deep.equal(SUCCESS_USER_BY_PK_MOCK.data);
    });

    it('NOT FOUND user', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(User, 'findByPk').resolves(null);
  
      const response = await chai.request(app)
        .get('/user')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`);

      expect(response.status).to.be.equal(USER_NOT_FOUND_MOCK.status);
      expect(response.body).to.be.deep.equal(USER_NOT_FOUND_MOCK.data);
    });
  });
});