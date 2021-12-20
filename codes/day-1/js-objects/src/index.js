//1. object literal syntax
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