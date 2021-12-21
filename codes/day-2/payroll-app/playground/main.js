function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
}

//access the prototype object of person function, using prototype property of the function itself
console.log(person.prototype)
person.prototype.print = function () {
    return this.name
}
console.log(Object.prototype)

const anilObj = new person('anil', 1, 1000)
//access the prototype object of person function, using __proto__ property of the created object
//using __proto__ property you can access the base object of the any object
console.log(anilObj.__proto__)

console.log(anilObj.hasOwnProperty('print'))
console.log(person.prototype.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))

console.log(anilObj.print())

var sunilObj = {
    name: 'sunil'
}
console.log(sunilObj.__proto__)