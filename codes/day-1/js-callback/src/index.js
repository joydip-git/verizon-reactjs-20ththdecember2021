var numbers = [1, 3, 2, 5, 6, 4, 8, 7, 0, 9]
//filter this array and display all the odd numbers 
console.log(typeof numbers)
//numbers = 12

//to this function pass an array
//return an array with only even numbers
function filterValues(arr, logicFn) {
    var filtered = []
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
var isEven = function (num) {
    return num % 2 === 0
}
var isOdd = function (num) {
    return num % 2 !== 0
}
//pass the source of data and the logic reference
var result = filterValues(numbers, isEven)

show(result)

//NOT: DO NOT USE built-in filter function of the array

var places = ['chennai', 'bangalore', 'mumbai']
var filterPlacesByName = function (place) {
    return place.indexOf('e') !== -1
}

var filteredPlaces = filterValues(places, filterPlacesByName)
show(filteredPlaces)

function show(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}