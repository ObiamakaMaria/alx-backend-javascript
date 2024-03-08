export default class Currency {
  constructor(code, name) {
    this._verifyString(code, 'code');
    this._verifyString(name, 'name');
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._verifyString(code, 'code');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._verifyString(name, 'name');
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  _verifyString(element, desc) {
    if (typeof element === 'string') {
      if (desc === 'code') {
        this._code = element; /* eslint no-underscore-dangle: 0 */
      } else {
        this._name = element;
      }
    } else {
      throw new TypeError('Element must be a string');
    }
  }
}
