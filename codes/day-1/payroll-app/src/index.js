const salaryCallback = function (emp) {
    emp.calculateSalary()
}
calculateSalaryOfEmployees(salaryCallback)

const showCallback = function (emp) {
    console.log(`Name: ${emp.name}, Salary:${emp.totalSalary}`)
}
showEmployees(showCallback)

const salaryFilterCallback = function (emp) {
    return emp.totalSalary > 10010
}
const result = filterEmployeesBySalary(salaryCallback)
console.log(result)

const sortBySalaryCallback = function (emp1, emp2) {
    return emp1.totalSalary - emp2.totalSalary
}
const salarySort = sortEmployeesBySalary(sortBySalaryCallback)
console.log(salarySort)

const sortByNameCallback = function (emp1, emp2) {
    return emp1.name.localeCompare(emp2.name)
}
const nameSort = sortEmployeesByName(sortByNameCallback)
console.log(nameSort)