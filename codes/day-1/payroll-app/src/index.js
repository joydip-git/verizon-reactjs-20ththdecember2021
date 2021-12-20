function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.daPay = da
    this.hraPay = hra
    this.totalSalary = 0
}
employee.prototype.calculateSalary = function () {
    this.totalSalary = this.basicPay + this.daPay + this.hraPay
}

function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)
    this.incentivePay = incentive

    this.calculateSalary = function () {
        employee.prototype.calculateSalary.call(this)
        this.totalSalary += this.incentivePay
    }
}

function hr(name, id, basic, da, hra, gratuity) {
    employee.call(this, name, id, basic, da, hra)
    this.gratuityPay = gratuity

    this.calculateSalary = function () {
        employee.prototype.calculateSalary.call(this)
        this.totalSalary = this.totalSalary + this.gratuityPay
    }
}

// console.log(Object.prototype)
// console.log(developer.prototype)
// console.log(hr.prototype)

// const maheshObj = new developer('mahesh', 3, 1003, 2004, 3005, 4006)
// maheshObj.calculateSalary()
// console.log(maheshObj.totalSalary)


const employees = [
    new developer('mahesh', 3, 1003, 2004, 3005, 4006),
    new developer('sunil', 2, 1001, 2002, 3003, 4004),
    new developer('anil', 1, 1000, 2000, 3000, 4000),
    new hr('banu',4,1050,2050,3050,4050),
    new hr('ramnath',5,1150,2150,3150,4150)
]

const salaryCallback = function (emp) {
    emp.calculateSalary()
}
employees.forEach(salaryCallback)

const showCallback = function (emp) {
    console.log(`Name: ${emp.name}, Salary:${emp.totalSalary}`)
}
//developers.forEach(showCallback)

const salaryFilterCallback = function (emp) {
    return emp.totalSalary > 10010
}
const employeesFilteredBySalary = employees.filter(salaryFilterCallback)
//employeesFilteredBySalary.forEach(showCallback)

const sortBySalaryCallback = function (emp1, emp2) {
    return emp1.totalSalary - emp2.totalSalary
}
// developers.sort(sortBySalaryCallback)
// developers.forEach(showCallback)

const sortByNameCallback = function (emp1, emp2) {
    return emp1.name.localeCompare(emp2.name)
}
//employees.sort(sortByNameCallback)
employees.forEach(showCallback)

