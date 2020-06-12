// Closure é o escopo quando uma função é declarada
// Esse escopo permire a função acessar e manipular variáveis externas à função

// Contexto léxico em acção!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())