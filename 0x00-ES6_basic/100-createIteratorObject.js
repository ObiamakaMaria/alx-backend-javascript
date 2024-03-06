export default function createIteratorObject(report) {
  const myNewObject = report.allEmployees;
  const myNewArray = [];

  for (const idx in newObject) {
    if (idx) {
      myNewArray.push(...myNewObject[idx]);
    }
  }

  return (myNewArray);
}
