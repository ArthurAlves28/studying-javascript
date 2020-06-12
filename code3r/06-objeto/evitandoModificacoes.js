// Object.preventExntensions
// Cria um objeto que não pode ser extendido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

// Verifica se o objeto em questão é extensível
console.log(Object.isExtensible(produto))

// Testando alterações no objeto produto
produto.nome = 'Borracha' 
produto.descricao = 'Borracha escolar branca'
delete produto.tag

// O objeto pode ter o valor de seus atributos alterados e/ou excluídos
// porém não é possível incluir atributos
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

// Verifica se o objeto pessoa está selado
console.log('Selado: ', Object.isSealed(pessoa))

// Testando alterações no objeto pessoa
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

// O objeto pode ter o valor de seus atributos alterados, 
// porém não possível incluir ou excluir os atributos
console.log(pessoa)

// O Object.freeze equivale ao Object.seal porém os valores também são constantes.