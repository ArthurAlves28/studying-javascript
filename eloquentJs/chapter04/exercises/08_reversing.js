// A function that reverser an array
// And other function that does the same, but returns the same array

let array = [1, 2, 3, 4, 5];

function reverseArray (array = []) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }

    return newArray;
}

function reverseArrayInPlace (array = []) {
    let newArray = [];

    for(let i = array.length; i > 0; i--) {
       newArray.push(i);
       array.pop();
    }

    array = newArray;

    return array;
}

console.log(reverseArray(array));
console.log(reverseArrayInPlace(array));