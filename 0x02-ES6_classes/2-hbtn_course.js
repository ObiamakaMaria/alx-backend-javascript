export default class HolbertonCourse {
  constructor(name, length, students) {
    this._verifyString(name);
    this._verifyNumber(length);
    this._verifyArray(students);
  }

  set name(name) {
    this._verifyString(name);
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._verifyNumber(length);
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._verifyArray(students);
  }

  get students() {
    return this._students;
  }

  _verifyArray(array) {
    if (Array.isArray(array) && (array.every((element) => typeof element === 'string' && element.trim() !== ''))) {
      this._students = array;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  _verifyString(string) {
    if (typeof string === 'string') {
      this._name = string; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  _verifyNumber(number) {
    if (typeof number === 'number') {
      this._length = number;
    } else {
      throw new TypeError('Length must be a number');
    }
  }
}
