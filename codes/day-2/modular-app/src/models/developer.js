const employeeModuleExports = require('./employee')

class Developer extends employeeModuleExports.Employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.incentivePay = incentive
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.incentivePay
    }
}

module.exports={
    Developer
}