const getPaymentTokenFromAPI = (sucess) => {
    if (sucess) {
      return new Promise((resolve, reject) => {
        resolve({ data: 'Successful response from the API' });
      })
    }
    else {
      // do nothing
    }
  }
  
  module.exports = getPaymentTokenFromAPI;