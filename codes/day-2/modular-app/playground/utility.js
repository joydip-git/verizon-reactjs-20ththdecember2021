const add = function (a, b) {
    return a + b
}
const subtract = function (a, b) {
    return a + b
}

//not exported
// const divide = function (a, b) {
//     return a / b
// }

// module.exports = {
//     addFn: add,
//     subtractFn: subtract
// }
//or
// module.exports = {
//     add: add,
//     subtract: subtract
// }
//or
module.exports = {
    add,
    subtract
}