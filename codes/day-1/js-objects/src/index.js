var add = function (a, b) {
    return (a + b)
}

var subtract = function (a, b) {
    return a - b
}

function callOperation(fnRef) {
    return fnRef(10, 20)
}

var resultAdd = callOperation(add)
var resultSub = callOperation(subtract)

console.log(resultAdd)
console.log(resultSub)

var eventFn = function () {
    alert('called')
}

var btn = document.getElementById('btnClick')
btn.addEventListener('click',eventFn)

