//1. object literal syntax
/*
const joydipObject = {

    //value properties
    name: 'joydip',
    id: 1,
    salary: 1000,
    subjects: [{
        name: 'JS',
        years: 17
    }, {
        name: 'React',
        years: 7
    }],

    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
*/

//2. constructor function
function person(name, id, salary, subjects) {
    //a will be stored in context object of the function
    //it's like a local variable of the function
    const a = 10
    
    //following will be stored in the object created when you used new keyword to call the function
    this.name = name
    this.id = id
    this.salary = salary
    this.subjects = subjects
    this.print = function () {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}
function subject(name, years) {
    this.subjectName = name
    this.workExperience = years
}
const jsSubject = new subject('JS', 17)
const reactSubject = new subject('React', 7)

const subjects = [jsSubject, reactSubject]

const joydipObject = new person('joydip', 1, 1000, subjects)

//accessing value property
console.log(joydipObject.name)
console.log(joydipObject['subjects'])

//accessing functional property
console.log(joydipObject.print())

//dynamic objects
joydipObject.location = 'Bangalore'
joydipObject.show = function () {
    console.log(this.location)
}
joydipObject.show()

//objects are iterable
for (let propName in joydipObject) {
    const propValue = joydipObject[propName]
    console.log(propName + ':' + propValue)
}

