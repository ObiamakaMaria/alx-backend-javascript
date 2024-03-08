export default class HolbertonClass {
  constructor(size, location) {
    this._verifyNumber(size);
    this._verifyString(location);
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._verifyNumber(size);
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._verifyString(location);
  }

  _verifyString(string) {
    if (typeof string === 'string') {
      this._location = string; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  _verifyNumber(number) {
    if (typeof number === 'number') {
      this._size = number;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  valueOf() {
    return (this.size);
  }

  toString() {
    return (this.location);
  }
}
