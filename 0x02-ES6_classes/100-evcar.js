import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; /* eslint no-underscore-dangle: 0 */
  }

  cloneCar() {
    return new Car(); /* eslint class-methods-use-this: 0 */
  }
}
