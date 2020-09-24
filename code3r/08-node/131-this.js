console.log(this === global) // falso
console.log(this === module) // falso

console.log(this === module.exports) // verdadeiro
console.log(this === exports) // verdadeiro

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === module)
}

logThis()