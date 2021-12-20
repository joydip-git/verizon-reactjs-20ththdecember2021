//IIFE (Immediately invocable function expression -- iify)
(
    function () {
        console.log(a)
        var a = 10
        a = false        
        console.log(a)
        console.log(typeof a)
        //number, string , boolean, object

        var arr = [1, 2, 3, 4]
        var arr1 = new Array(1, 2, 3, 4)

        //console.log(add(10, 20))
        //function declaration (gets hoisted)
        function add(a, b) {
            return (a + b)
        }
        console.log(add(1, 2))

        // subtract(10, 5)
        //function expression (does not get hoisted)
        var subtract = function (a, b) {
            return a - b
        }
        console.log(subtract(10, 5))
        console.log(a.toExponential(2))
    })();