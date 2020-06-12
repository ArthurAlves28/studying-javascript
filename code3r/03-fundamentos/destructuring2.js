const [a] = [10] // usa o operador destructuring para remover o número 10 do array e atribuir a variável a
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // atribui os valores 10 e 9 as variáveis n1 e n3
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)