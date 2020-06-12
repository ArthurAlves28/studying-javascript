console.log('01)', '1' == 1) // igual - comparação de valores
console.log('02)', '1' === 1) // estritamente igual
console.log('03)', '3' != 3) // diferente
console.log('04)', '3' !== 3) // estritamente diferente

console.log('05)', 3 < 3)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // nesse caso a comparação é feita entre enereço de memória, o resultado sempre será falso
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // nesse casso a comparação é feita entre dois campos do mesmo tipo

console.log('12)', undefined == null)
console.log('12)', undefined === null)
