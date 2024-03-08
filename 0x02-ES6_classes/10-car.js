export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; /* eslint no-underscore-dangle: 0 */
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
