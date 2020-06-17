// fatten an array of arrays
// a = accumulator
// b = current item

let arrays = [[1,2], [3,4], [5, 6]];

console.log(arrays.reduce((a, b) => a.concat(b), []));