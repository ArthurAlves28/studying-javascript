console.log(soma(3, 4))

// function declaration
// efeito de hoisting automático
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
// o nome da função aparece no stack tracer
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

