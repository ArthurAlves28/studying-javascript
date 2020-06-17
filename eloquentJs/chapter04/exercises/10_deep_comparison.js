// A function that returns true onle when the values are the same

function deepEqual(first, second) {
    if(first === second) {
        return true;
    }
    
    if( first == null || typeof first != 'object' ||
    second == null || typeof second != 'object') {
        return false;
    }
    
    let keysA = Object.keys(first), keysB = Object.keys(second);
    
    if (keysA.length != keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(first[key], second[key])) return false;
    }
    
    return true;   
}

obj1 = {val: 'valor'};
obj2 = {val: 'valor', other: 2};

let val1 = 'car';
let val2 = 'not a car';

console.log(deepEqual(obj1, obj2));