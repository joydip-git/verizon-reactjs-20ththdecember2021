const employees = require('../repository/employees')

function calculateSalaryOfEmployees(salaryCallback) {
    employees.forEach(salaryCallback)
}

function showEmployees(showCallback) {
    employees.forEach(showCallback)
}

function filterEmployeesBySalary() {
    return employees.filter(salaryFilterCallback)
}

function sortEmployeesByName(sortByNameCallback) {
    return employees.sort(sortByNameCallback)
}

function sortEmployeesBySalary(sortBySalaryCallback) {
    return employees.sort(sortBySalaryCallback)
}

module.exports={
    calculateSalaryOfEmployees,
    showEmployees,
    filterEmployeesBySalary,
    sortEmployeesByName,
    sortEmployeesBySalary
}