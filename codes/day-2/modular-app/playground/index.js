const utilityModuleExports = require('./utility')
console.log(utilityModuleExports)
// const addRes = utilityModuleExports.addFn(10, 20)
// const subRes = utilityModuleExports.subtractFn(10, 2)
//or
const addRes = utilityModuleExports.add(10, 20)
const subRes = utilityModuleExports.subtract(10, 2)
console.log(addRes)
console.log(subRes)


