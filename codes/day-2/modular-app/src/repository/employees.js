const devMouleExports = require('../models/developer')
const hrMouleExports = require('../models/hr')

const employees = [
    new devMouleExports.Developer('mahesh', 3, 1003, 2004, 3005, 4006),
    new devMouleExports.Developer('sunil', 2, 1001, 2002, 3003, 4004),
    new devMouleExports.Developer('anil', 1, 1000, 2000, 3000, 4000),
    new hrMouleExports.Hr('banu', 4, 1050, 2050, 3050, 4050),
    new hrMouleExports.Hr('ramnath', 5, 1150, 2150, 3150, 4150)
]

module.exports = employees