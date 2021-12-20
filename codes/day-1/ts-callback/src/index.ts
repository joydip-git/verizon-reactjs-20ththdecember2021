type calculationFnType = (a: number, b: number) => number

function callOperation(callbackFn: calculationFnType): void {
    console.log(callbackFn(10, 20))
}

var add: calculationFnType = function (x, y) {
    return x + y
}

callOperation(add)


