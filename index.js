// Write your solution in this file!
const employee = {
    name: 'Newton',
    age: 25,
    position: 'Developer'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(updateEmployeeWithKeyAndValue(employee, 'salary', 50000));
console.log(employee); 

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Manager'));
console.log(employee); 

console.log(deleteFromEmployeeByKey(employee, 'age'));
console.log(employee); 

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'position'));
console.log(employee); 
