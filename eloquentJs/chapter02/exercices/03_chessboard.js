// Print a 8x8 chessboard grid

let line = '';
let size = 8 ;

/*
for (let i = 0; i < size; i++) {
    line += '# ';
}

for (let j = 0; j < size; j++) {
    console.log(line);
}
*/

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            line += ' '
        } else {
            line += '#';
        }
    }
    line += '\n';
}

console.log(line);