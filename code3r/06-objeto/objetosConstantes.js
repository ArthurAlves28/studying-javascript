// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } // não é possível atribuir um novo objeto a variável constante "pessoa"

Object.freeze(pessoa) // o objeto não pode ser alterado, portanto ele se transformou em um objeto constante
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa.end)

// criando um objeto constante atribuindo a uma variável constante
const pessoaConstante = Object.freeze( { nome: 'Joao' } )
console.log(pessoaConstante)