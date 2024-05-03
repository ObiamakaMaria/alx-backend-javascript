const { expect } = require('chai');
const request = require('request');

describe('Testing API', () => {
  const url = 'http://localhost:7865';
  it('Checks and test the main page status code and body ', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});


describe('Testing Cart route', () => {
  const url = 'http://localhost:7865/cart/77'
  it('Checks when id is a valid number', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('Checks when id is not a number', (done) => {
    const url = 'http://localhost:7865/cart/hh'
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });

  it('Checks for correct response body for cart page', (done) => {
    const url = 'http://localhost:7865/cart/87';
    request(url, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 87');
      done();
    });
  });
});