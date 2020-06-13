// A function that returns how many uppecase B's exists in one string

function countBs (string = '') {
    return countChars(string, 'B');
}

function countChars (string = '', character = 'a') {
    let counter = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            counter++;
        }
    }

    return counter;
}

console.log(countBs('aaBBodbamsoBoanbbdfnaAgB'));

console.log(countChars('aaBBodbamsoBoanbbdfnaAgB', 'f'));