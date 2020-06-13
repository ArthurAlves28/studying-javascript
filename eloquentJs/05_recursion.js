// Write a function that uses recursion to test if a munber is even or not
// using the rules: = 0 returns true, = 1 returns false

function isEven (number) {
    if (number == 0 ) {
        return true;
    } else if (number == 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-1));