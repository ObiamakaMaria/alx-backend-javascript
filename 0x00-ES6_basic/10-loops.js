export default function appendToEachArrayValue(array, appendString) {
  const myNewArray = [];

  for (const idx of array) {
    myNewArray.push(appendString + idx);
  }

  return newArray;
}
