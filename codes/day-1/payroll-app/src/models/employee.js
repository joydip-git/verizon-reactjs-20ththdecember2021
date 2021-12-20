class Employee {
    constructor(name, id, basic, da, hra) {
        this.name = name
        this.id = id
        this.basicPay = basic
        this.daPay = da
        this.hraPay = hra
        this.totalSalary = 0
    }
    //method
    calculateSalary() {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}