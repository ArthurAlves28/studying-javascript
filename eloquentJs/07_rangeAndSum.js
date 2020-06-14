// A function that recieves three paramaters, starts, end $ step and build an array out of it
// Other function that sums the number of a given array

function range (start, end, step = -1) {
    let array = [];

    if( start > end) {
        for(let i = start; i >= end; i+= step) {
            array.push(i);
        }
    } else {
        for(let i = start; i <= end; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum (array = []) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(...range(5, 2, -1));

console.log(sum(range(1, 10, 1)));