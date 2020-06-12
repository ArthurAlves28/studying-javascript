const a = 1
const b = 2
const c = 3

// Antes da versão ES6
// esse tipo de declaração é util para alterar o nome do atributo
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

// É possível criar a adicionar aributos e valores a objetos a partir de variáveis
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// Outra forma de realizar o mesmo procedimento
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Forma antiga de declarar uma função em um objeto
const obj5 = {
    funcao1: function() {
        // ...
    },

    // Forma atual de definir uma função
    funcao2() {
        // ...,
    }
}

console.log(obj5)