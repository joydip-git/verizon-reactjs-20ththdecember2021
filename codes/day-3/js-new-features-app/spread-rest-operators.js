const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000
}

const func = {
    print: function () {
        console.log(this.name)
    }
}

// const copyOfAnil = {}
// Object.assign(copyOfAnil, anilObject, func)
// console.log(copyOfAnil)

//(...)---> spread operator
const copyOfAnil = {
    ...anilObject,
    ...func
}
console.log(copyOfAnil)
copyOfAnil.print()

const numbers1 = [1, 2, 3, 4]
const numbers2 = [5, 6, 7, 8]

const numbers = [...numbers1, 100, 200, ...numbers2]
console.log(numbers)

//used to accept directly parameters (remaining apart from the fiex number of arguments), hence known as rest operator
function calculateAverage(name, ...arr) {
    
}

calculateAverage('anil', 10, 20, 30) //---> [10,20,30]
calculateAverage('sunil', 1, 2, 3, 4, 5, 6, 76)//--->[1, 2, 3, 4, 5, 6, 76]