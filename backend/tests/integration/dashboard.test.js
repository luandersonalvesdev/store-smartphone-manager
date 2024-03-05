const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { Product } = require('../../api/models');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const {
  PRODUCTS_FROM_DB_MOCK, GET_ALL_PRODUCTS_ERROR_NOT_TOKEN, GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN, PRODUCT_FORM_STRUCTURE_1_MOCK,
  RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK, SUCCESS_CREATE_PRODUCT_STRUCTURE_1, PRODUCT_FORM_STRUCTURE_2_MOCK,
  RETURN_PRODUCT_CREATE_STRUCTURE_3_MOCK, PRODUCT_FORM_STRUCTURE_3_MOCK, SUCCESS_CREATE_PRODUCT_STRUCTURE_2,
  RETURN_PRODUCT_CREATE_STRUCTURE_1_OTHER_VALUES_MOCK, SUCCESS_UPDATE_PRODUCT_STRUCTURE_1, PRODUCT_FROM_DB_MOCK, SUCCESS_DELETE_PRODUCT_MOCK
} = require('../mocks/product.mock');
const {
  USER_PAYLOAD_RETURN_MOCK, TOKEN_MOCK
} = require('../mocks/user.mock');

chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;

describe('Dashboard tests', function() {

  afterEach(() => {
    sinon.restore();
  });

  describe('TOKEN cases', function() {

    it('ERROR TOKEN not found', async function() {
      const response = await chai.request(app).get('/dashboard/product');
  
      expect(response.status).to.be.equal(GET_ALL_PRODUCTS_ERROR_NOT_TOKEN.status);
      expect(response.body).to.be.deep.equal(GET_ALL_PRODUCTS_ERROR_NOT_TOKEN.data);
    });
  
    it('ERROR TOKEN invalid', async function() {
      const response = await chai.request(app)
        .get('/dashboard/product')
        .set('Authorization', 'Baerer invalid.invalid.invalid');
  
      expect(response.status).to.be.equal(GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN.status);
      expect(response.body).to.be.deep.equal(GET_ALL_PRODUCTS_ERROR_INVALID_TOKEN.data);
    });
  });

  describe('GET cases', function() {
    it('SUCCESS get all products', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(Product, 'findAll').resolves(PRODUCTS_FROM_DB_MOCK);
  
      const response = await chai.request(app)
        .get('/dashboard/product')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`);
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(PRODUCTS_FROM_DB_MOCK);
    });
  });

  describe('CREATE cases', function() {
    it('SUCCESS create product - structure 1', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(Product, 'create').resolves(RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK);
  
      const response = await chai.request(app)
        .post('/dashboard/product')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`)
        .send(PRODUCT_FORM_STRUCTURE_1_MOCK);
  
      expect(response.status).to.be.equal(SUCCESS_CREATE_PRODUCT_STRUCTURE_1.status);
      expect(response.body).to.be.deep.equal(SUCCESS_CREATE_PRODUCT_STRUCTURE_1.data);
    });

    it('SUCCESS create product - structure 2', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(Product, 'create').resolves(RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK);
  
      const response = await chai.request(app)
        .post('/dashboard/product')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`)
        .send(PRODUCT_FORM_STRUCTURE_2_MOCK);
  
      expect(response.status).to.be.equal(SUCCESS_CREATE_PRODUCT_STRUCTURE_1.status);
      expect(response.body).to.be.deep.equal(SUCCESS_CREATE_PRODUCT_STRUCTURE_1.data);
    });
  });

  describe('UPDATE cases', function() {
    it('SUCCESS update product', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(Product, 'update').resolves(RETURN_PRODUCT_CREATE_STRUCTURE_1_MOCK);
  
      const response = await chai.request(app)
        .put('/dashboard/product')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`)
        .send(PRODUCT_FROM_DB_MOCK);
  
      expect(response.status).to.be.equal(SUCCESS_UPDATE_PRODUCT_STRUCTURE_1.status);
      expect(response.body).to.be.deep.equal(SUCCESS_UPDATE_PRODUCT_STRUCTURE_1.data);
    });
  });

  describe('DELETE cases', function() {
    it('SUCCESS update product', async function() {
      sinon.stub(jwt, 'verify').returns(USER_PAYLOAD_RETURN_MOCK);
      sinon.stub(Product, 'destroy').resolves(null);
  
      const response = await chai.request(app)
        .delete('/dashboard/product/1')
        .set('Authorization', `Baerer ${TOKEN_MOCK}`);
  
      expect(response.status).to.be.equal(SUCCESS_DELETE_PRODUCT_MOCK.status);
      expect(response.body).to.be.deep.equal(SUCCESS_DELETE_PRODUCT_MOCK.data);
    });
  });
});