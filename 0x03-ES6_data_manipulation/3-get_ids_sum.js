export default function getStudentIdsSum(studentList) {
  return studentList.reduce((acc, currElement) => acc + currElement.id, 0);
}
