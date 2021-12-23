const divide = (a, b) => {
    const p = new Promise(
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity)
                rejectFn('denominator can not be zero')

            resolveFn(res)
        }
    )
    return p
}

const add = (a, b) => {
    return a + b
}

const prom = divide(10, 2)
prom
    .then(
        (data) => {
            console.log(data)
        },
        (error) => {
            console.log(error)
        }
    )
// .catch(
//     (error) => {
//         console.log(error)
//     }
// )
console.log(add(10, 2))
console.log('done')