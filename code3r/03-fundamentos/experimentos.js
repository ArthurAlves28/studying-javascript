let a = 3

global.b = 123 // global equivale ao objeto window do navegador

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // cada arquivo é um modulo em Node.js
console.log(module.exports === this)
console.log(module.exports) // equivale a {e: 456, f: false, g: 'teste'}

abc = 3 // a variável foi criada no objeto global do Node.js
console.log(global.abc)

// fuja do escobo global