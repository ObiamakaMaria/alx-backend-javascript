export default function getListStudentIds(objectArray) {
  if (!Array.isArray(objectArray)) {
    return [];
  }

  const idArray = [];

  objectArray.map((element) => idArray.push(element.id));

  return idArray;
}
