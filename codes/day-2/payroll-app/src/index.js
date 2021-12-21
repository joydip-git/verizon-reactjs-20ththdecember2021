//const managerModuleExports = require('./manager/employeemanager')
import * as managerModuleExports from "./manager/employeemanager";

const btn = document.getElementById('btnClick')
btn.addEventListener('click', call)
function call() {
    window.alert('called')
}
const salaryCallback = function (emp) {
    emp.calculateSalary()
}
managerModuleExports.calculateSalaryOfEmployees(salaryCallback)

const showCallback = function (emp) {
    console.log(`Name: ${emp.name}, Salary:${emp.totalSalary}`)
}
managerModuleExports.showEmployees(showCallback)

const salaryFilterCallback = function (emp) {
    return emp.totalSalary > 10010
}
const result = managerModuleExports.filterEmployeesBySalary(salaryCallback)
console.log(result)

const sortBySalaryCallback = function (emp1, emp2) {
    return emp1.totalSalary - emp2.totalSalary
}
const salarySort = managerModuleExports.sortEmployeesBySalary(sortBySalaryCallback)
console.log(salarySort)

const sortByNameCallback = function (emp1, emp2) {
    return emp1.name.localeCompare(emp2.name)
}
const nameSort = managerModuleExports.sortEmployeesByName(sortByNameCallback)
console.log(nameSort)