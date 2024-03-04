const chai = require('chai');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');
const app = require('../../api/app');

chai.use(chaiHttp);
chai.use(sinonChai);

const { expect } = chai;

describe('Server health.', () => {
  it('Should return status 200 and a text.', async () => {
    const response = await chai.request(app).get('/')

    expect(response.status).to.be.equal(200);
    expect(response.text).to.be.equal('Server are healthy!');
  });
});
