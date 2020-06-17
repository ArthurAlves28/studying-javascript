function every(array, test) {
    for(let i = 0; i < array.length; i++) {
        if(!test(array[i])) return false
    }
    return true;
}

function otherEvery(array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(otherEvery([1, 3, 8], n => n < 10));