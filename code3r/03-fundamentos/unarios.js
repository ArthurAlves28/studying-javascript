let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// operadores prefixados possuem precedência a operadores posfixados
console.log(++num1 === num2--) // evitar usar incremento dentro de comparações
console.log(num1 === num2)