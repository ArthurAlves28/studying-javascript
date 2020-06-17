// A  function that builds a list out of an array

function arrayToList (array = []) {
    let list = {}
    
    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
}

function tolistArray (list = {}) {
    let array = [];
    
    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

function prepend (value, list) {
    return {value, rest: list};
}

function nth (list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2, 3]));
console.log(tolistArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, prepend(3, null))));
console.log(nth(arrayToList([1, 2, 3]), 1));