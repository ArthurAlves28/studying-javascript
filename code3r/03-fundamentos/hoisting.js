// Hoisting corresponde a um comportamento padrão do JavaScript de mover a declaração da variável
// para antes de sua chamada

console.log('a =', a)
var a = 2 // a variavel é issada (hoisting) para a primeira declaração de console.log não retornar erro
console.log('a =', a)

console.log('b =', b)
let b = 2 // o hoisting não acontece com let
console.log('b =', b)