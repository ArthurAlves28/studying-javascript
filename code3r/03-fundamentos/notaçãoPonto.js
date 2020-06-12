console.log(Math.ceil(6.1)) // usada para acessar uma função definida dentro de um objeto

const obj1 ={}
obj1.nome = 'Bola' // usado para criar o campo nome
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // atribui a variavel nome passada por parametro um valo e a torna pública
    this.exec = function() { // cria a função exec que pode ser acessada através de qualquer instância de Obj
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // aribui um novo valor para o campo
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // lê o valor do campo nome no objeto
console.log(obj3.nome)
obj3.exec() // acessa a função exec definida em Obj