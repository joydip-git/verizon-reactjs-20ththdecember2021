var a: number = 10

var numbers = [1, 3, 2, 5, 6, 4, 8, 7, 0, 9]
//filter this array and display all the odd numbers 
console.log(typeof numbers)
//numbers = 12

//function typification
// type callbackFnType = (arg: number) => boolean

//type parameter --> T
type callbackFnType<T> = (arg: T) => boolean

//to this function pass an array
//return an array with only even numbers
function filterValues<T>(arr: T[], logicFn: callbackFnType<T>): T[] {
    var filtered: T[] = []
    for (var index = 0; index < arr.length; index++) {
        var item = arr[index]
        //invokes the function by using address/reference to the function
        var status = logicFn(item)

        if (status) {
            filtered.push(item)
        }
    }
    return filtered
}

//logic to apply on every item (of number type) in the array (source of data)
//the argument in that function should be of the same data type as that of the elements in the source of data
var isEven: callbackFnType<number> = function (num: number) {
    return num % 2 === 0
}
var isOdd: callbackFnType<number> = function (num: number) {
    return num % 2 !== 0
}
//pass the source of data and the logic reference
var result = filterValues<number>(numbers, isEven)

show(result)

//NOT: DO NOT USE built-in filter function of the array

var places = ['chennai', 'bangalore', 'mumbai']
var filterPlacesByName: callbackFnType<string> = function (place: string) {
    return place.indexOf('e') !== -1
}

var filteredPlaces = filterValues<string>(places, filterPlacesByName)
show(filteredPlaces)


function show<T>(arr: T[]): void {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}