// Write your solution in this file!
const employee = {
  name: "Max",
  streetAddress: "5 Main Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
 
  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
 
  const newObj = Object.assign({}, employee);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}
console.log(employee);
updateEmployeeWithKeyAndValue(employee, "name", "Maximo");
console.log(employee);
destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","6 McCarthy Drive")
console.log(employee);
deleteFromEmployeeByKey(employee, "name");
console.log(employee);
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employee);

