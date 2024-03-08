export default class Building {
  constructor(sqft) {
    this._SQFT(sqft);

    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage'); /* eslint class-methods-use-this: 0 */
  }

  set sqft(sqft) {
    this._SQFT(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  _SQFT(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Invalid SQFT value');
    }
  }
}
