export default function getStudentsByLocation(studentList, string) {
  return studentList.filter((elem) => elem.location === string);
}
