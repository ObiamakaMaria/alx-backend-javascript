export default function createIteratorObject(report) {
  const newObject = report.allEmployees;
  const newArray = [];

  for (const idx in newObject) {
    if (idx) {
      newArray.push(...newObject[idx]);
    }
  }

  return (newArray);
}