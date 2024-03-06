export default function appendToEachArrayValue(array, appendString) {
  const myNewArray = [];

  for (const idx of array) {
    if (idx) {
    myNewArray.push(appendString + idx);
    }
  }

  return myNewArray;
}
