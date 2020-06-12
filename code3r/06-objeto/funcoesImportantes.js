const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna as chaves do objeto pessoa (atributos)
console.log(Object.keys(pessoa))

// Retorna o valor dos atributos do objeto pessoa
console.log(Object.values(pessoa))

// Retornar o objeto pessoa como um array e seus atributos e valores como subarrays
console.log(Object.entries(pessoa))

// É possível percorrer o array gerado pelo Object.entries
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// É possível adicionar a atribuir propriedades dos atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // o atributo pode ser listado
    writable: false, // o atributo não pode ter seu valor alterado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015), concatena objetos
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

// 
Object.freeze(obj)
obj.c = 1234
console.log(obj)