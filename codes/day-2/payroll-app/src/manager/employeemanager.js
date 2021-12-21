import employees from '../repository/employees'

export function calculateSalaryOfEmployees(salaryCallback) {
    employees.forEach(salaryCallback)
}

export function showEmployees(showCallback) {
    employees.forEach(showCallback)
}

export function filterEmployeesBySalary() {
    return employees.filter(salaryFilterCallback)
}

export function sortEmployeesByName(sortByNameCallback) {
    return employees.sort(sortByNameCallback)
}

export function sortEmployeesBySalary(sortBySalaryCallback) {
    return employees.sort(sortBySalaryCallback)
}