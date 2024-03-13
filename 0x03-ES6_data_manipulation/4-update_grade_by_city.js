export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const filterArray = studentList.filter((element) => element.location === city)
    .map((element) => {
      newGrade.map((gradeElement) => { /* eslint array-callback-return: 0 */
        const tmp = element.id === gradeElement.studentId ? gradeElement.grade : false;
        if (tmp) {
          element.grade = tmp; /* eslint no-param-reassign: 0 */
        }
      });

      return element;
    });

  return filterArray.filter((element) => {
    if (!element.grade) {
      element.grade = 'N/A';
    }
    return element;
  });
}
