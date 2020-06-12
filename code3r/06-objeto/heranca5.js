console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Essa função não existe, mas foi adicionada função String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Code3r'.reverse())

// Outra função adicionada a função Array
Array.prototype.first = function() {
    return this[0]
}

console.log(['a', 'b', 'c'].first())

// Não faça!!!
// Alterando um comportamento padrão da função String
String.prototype.toString = function() {
    return "Deu ruim!"
}

console.log('Escola Code3r'.reverse())