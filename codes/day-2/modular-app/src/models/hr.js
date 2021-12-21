const employeeModuleExports = require('./employee')

class Hr extends employeeModuleExports.Employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.gratuityPay = gratuity
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary = this.totalSalary + this.gratuityPay
    }
}


module.exports={
    Hr
}