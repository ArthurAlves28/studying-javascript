// a "manual" loop

function loop(value, test, update, body) {
    for(let i = value; test(i); i = update(i)) {
        body(i);
    }
}

loop(3, i => i > 0, i => i - 1, console.log);