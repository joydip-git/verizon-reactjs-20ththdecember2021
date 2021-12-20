function test() {
    //console.log(a)
    let a
    a = 10
    console.log(a) //10
    for (var i = 0; i < 1; i++) {
        let a
        a = 20
        console.log(a)//20
    }
    console.log(a)//10-->20
}
test()
function call() {
    var a
    a = 30
    console.log(a)//30
}
call()
//console.log(a)

const x = 20
//x = 40
console.log(x)

//arr stored reference of an array object
const arr = [1, 3,]
//in the variable you can't store reference to some other array
//arr = []

//that does not mean that you can't add or remove elements from the array object itself
arr.push(100)
console.log(arr)
//arr.splice(0, 1)
