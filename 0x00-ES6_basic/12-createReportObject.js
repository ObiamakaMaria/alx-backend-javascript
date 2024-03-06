export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let i = 0;

      for (const idx in employeesList) {
        if (idx) {
          i += 1;
        }
      }

      return i;
    },
  };

  return newObject;
}
