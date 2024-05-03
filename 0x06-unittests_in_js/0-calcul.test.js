const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('testing the sum of rounded numbers', () => {
  it('This rounds and adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.7, 2.2), 4);
  });
  it('This rounds & adds 0 and a positive number', () => {
    assert.strictEqual(calculateNumber(0, 2), 2);
  });
  it('This rounds & adds  0 and a negative number', () => {
    assert.strictEqual(calculateNumber(0, -2), -2);
  });
  it('This rounds & adds two negative numbers', () => {
    assert.strictEqual(calculateNumber(-2, -3), -5);
  });
  it('This rounds & adds one positive and one negative number', () => {
    assert.strictEqual(calculateNumber(1, -4), -3);
  });
})