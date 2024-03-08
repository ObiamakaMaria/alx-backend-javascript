import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._verifyFloor(floors);
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._verifyFloor(floors);
  }

  _verifyFloor(floors) {
    if (typeof floors === 'number') {
      this._floors = floors; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Invalid Floor Value Entered');
    }
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
