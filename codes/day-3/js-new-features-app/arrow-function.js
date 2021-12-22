var add = function (a, b) {
    return (a + b)
}
//arrow function
var subtract = (a, b) => console.log(a - b) //no return value
var multiply = (a, b) => a * b //returning a number


this.m = 100

function outer() {
    this.x = 10
    console.log(this)
    //1.
    //var ref = this
    // var inner = function () {
    //     this.y = 20
    //     const res = ref.x + this.y
    //     console.log(res)
    //     console.log(this)
    // }
    //inner()

    //2.
    // var inner = function () {
    //     this.y = 20
    //     const res = this.x + this.y
    //     console.log(res)
    //     console.log(this)
    // }
    //bind() binds the inner function to an object (in this case, the owner of the parent, i.e., outer function). But bind() method just binds, does not call the method. it returns the reference to the same bound function
    // inner = inner.bind(this)
    // inner()

    // 3. arrow function: arrow function gets automatically bound to the owner of the parent function (equivalent to bind() method call)
    // it solves 'lexical this problem'
    var inner = () => {
        this.y = 20
        //const res = ref.x + this.y
        const res = this.x + this.y
        console.log(res)
        console.log(this)
    }
    inner()


    // var inner = function () {
    //     this.y = 20
    //     const res = this.x + this.y
    //     console.log(res)
    //     console.log(this)
    // }
    //call, just like, bind(), binds the inner to the owner of parent function. but unlike bind(), which does not invoke the function itself, call() invokes the function immediately 
    //inner.call(this)
    //inner()
}
new outer()
//objRef.outer()
//new outer()
//console.log(this)

const resize = function (choice, xpos, ypos) {
    let callback;

    this.xposition = xpos
    this.yposition = ypos

    switch (choice) {
        case 1:
            callback = () => {
                return `resizing buttons. setting x pos to ${this.xposition} and y pos to ${this.yposition}`
            }
            break;

        case 2:
            callback = () => {
                return `resizing text boxes. setting x pos to ${this.xposition} and y pos to ${this.yposition}`
            }
            break;

        default:
            break;
    }
    //callback = callback.bind(this)
    return callback;
}

var ctrlResize = new resize(1, 100, 200)
console.log(ctrlResize())