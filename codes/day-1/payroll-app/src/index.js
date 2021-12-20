function developer(name, id, basic, da, hra, incentive) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.daPay = da
    this.hraPay = hra
    this.incentivePay = incentive
    this.totalSalary = 0

    this.calculateSalary = function () {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay + this.incentivePay
    }
}

const developers = [
    new developer('mahesh', 3, 1003, 2004, 3005, 4006),
    new developer('sunil', 2, 1001, 2002, 3003, 4004),
    new developer('anil', 1, 1000, 2000, 3000, 4000)   
]

const salaryCallback = function (emp) {
    emp.calculateSalary()
}
developers.forEach(salaryCallback)

const showCallback = function (emp) {
    console.log(`Name: ${emp.name}, Salary:${emp.totalSalary}`)
}
//developers.forEach(showCallback)

const salaryFilterCallback = function (emp) {
    return emp.totalSalary > 10010
}
const employeesFilteredBySalary = developers.filter(salaryFilterCallback)
//employeesFilteredBySalary.forEach(showCallback)

const sortBySalaryCallback = function (emp1, emp2) {
    return emp1.totalSalary - emp2.totalSalary
}
// developers.sort(sortBySalaryCallback)
// developers.forEach(showCallback)

const sortByNameCallback = function (emp1, emp2) {
    return emp1.name.localeCompare(emp2.name)
}
developers.sort(sortByNameCallback)
developers.forEach(showCallback)
