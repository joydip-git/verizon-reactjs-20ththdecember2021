const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000
}

// const nameValue = anilObject.name
// const idValue = anilObject.id
// const salaryValue = anilObject.salary

// const { name: nameValue, id: idValue, salary: salaryValue } = anilObject
// console.log(nameValue, idValue, salaryValue)

const { name, id, salary } = anilObject
console.log(name, id, salary)

const numbers = [1, 2, 3, 4]
const [x, , y,] = numbers
console.log(x)
console.log(y)

const [a, ...rest] = numbers
const [m, n, o] = rest
console.log(a, m, n, o)