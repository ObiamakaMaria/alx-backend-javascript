export default function createIteratorObject(report) {
  const myNewObject = report.allEmployees;
  const myNewArray = [];

  for (const idx in myNewObject) {
    if (idx) {
      myNewArray.push(...myNewObject[idx]);
    }
  }

  return (myNewArray);
}
