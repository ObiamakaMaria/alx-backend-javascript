export default class Currency {
  constructor(code, name) {
    this._verification(code, 'code');
    this._verification(name, 'name');
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._verification(code, 'code');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._verification(name, 'name');
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  _verification(value, type) {
    if (typeof value === 'string') {
      if (type === 'code') {
        this._code = value; /* eslint no-underscore-dangle: 0 */
      } else {
        this._name = value;
      }
    } else {
      throw new TypeError('Value must be a string');
    }
  }
}
