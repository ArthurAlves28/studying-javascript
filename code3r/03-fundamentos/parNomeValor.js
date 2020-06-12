// par nome/valor
// contexto léxico: contexto onde a variável e o valor foram definidos;
// arquivo, navegador, função, etc...

const saudacao = 'Opa' // contexto léxico 1: global, no arquivo

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2: dento da função exec()
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)