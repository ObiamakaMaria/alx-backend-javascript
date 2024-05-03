const chai = require('chai');
const request = require('request');

describe('Testing index page', () => {
  const url = 'http://localhost:7865';
  it('Checks and test the main page status code and body ', (done) => {
    request(url, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    })
})
});