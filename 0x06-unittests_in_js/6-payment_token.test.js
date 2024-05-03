const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a success message when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the test has completed
      })
      .catch(done); // Call done with an error if the promise is rejected
  });
});