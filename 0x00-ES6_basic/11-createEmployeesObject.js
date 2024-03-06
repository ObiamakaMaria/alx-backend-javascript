export default function createEmployeesObject(departmentName, employees) {
  const myNewObject = {
    [`${departmentName}`]: employees,
  };

  return myNewObject;
}
