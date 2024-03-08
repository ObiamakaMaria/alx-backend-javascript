import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._verifyAmount(amount);
    this._verifyCurrency(currency);
  }

  set currency(currency) {
    this._verifyCurrency(currency);
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._verifyAmount(amount);
  }

  get amount() {
    return this._amount;
  }

  _verifyCurrency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Invalid Currency Object Passed');
    }
  }

  _verifyAmount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Invalid amount value');
    }
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    if (!(typeof amount === 'number') || !(typeof conversionRate === 'number')) {
      throw new TypeError('Invalid Arguments Passed');
    }

    return amount * conversionRate;
  }
}
