const arr = [1,2,3,4,5];

function myMap(arr, fn) { // myMap is a higher order function that takes an array and a callback function as arguments
    let result = [];  // Create a new array to store the results
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }

    return result;
}

console.log(myMap(arr, function g(element) { // g is a callback function that takes an element as an argument   
    return element**2;
}))
