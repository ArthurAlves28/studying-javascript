const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// O código abaixo acessar a cadeia de protótipos em busca do
// atributo __proto__
// Uma cadeia de protoripos funciona como uma cadeia de objetos herdados
// Cada prototipo é um objeto herdado da classe superior (Pai)

console.log(ferrari.__proto__) // o retorno é um conjunto vazio, 
                               // o que significa que o atributo existe

console.log(ferrari.__proto__ === Object.prototype) // O retorno é true, os dois são estritamente iguais
console.log(volvo.__proto__ === Object.prototype) // O retorno também é true
console.log(Object.prototype.__proto__) // O retornor é nulo

// O fato do retorno ser nulo em Object.prototype.__proto__ indica que Object.prototype é a função original,
// não há herança antes dela

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)  // Os dois objetos são um tipo de função
console.log(Object.prototype, MeuObjeto.prototype) // Os dois possuem acesso a prototype