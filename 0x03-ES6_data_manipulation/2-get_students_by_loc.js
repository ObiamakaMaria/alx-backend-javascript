export default function getStudentsByLocation(studentList, string) {
  return studentList.filter((element) => element.location === string);
}
