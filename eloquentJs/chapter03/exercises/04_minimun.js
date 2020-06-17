// Write a funnction called 'min' tha returns the largest between two numbers

function min (first, second) {
    if (first > second) {
        return second;
    } else if (first < second) {
        return first;
    }
}

console.log(min(8, 5));