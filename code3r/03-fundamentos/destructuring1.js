// Recurso do ES 2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // retira os atributos nome e idade o objeto pessoa
console.log(nome, idade) // imprime os atributos nome e idade retirados do objeto pessoa

const {nome: n, idade: i} = pessoa // retira os atributos nome e idade o objeto pessoa e atribui as variaveis n e i
console.log(n, i)

// acessando campos não definidos no objeto
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // sobrenome retorna Undefined porque não existe dentro do objeto pessoa
                                    // bemHumorada retorna o valor que lhe foi atribuito

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) // cep retorna undefined porque não foi definido no campo endereco 

// acessando campos aninhados que não foram definidos no objjeto pessoa
/*
const{conta: {ag, num}} = pessoa // retornsra erro por o campo conta não foi definido
console.log(ag, num)
*/