const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})

console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})

console.log(algumBolsista)

/*-------------------------------------------------------------------------------------
Código do professor
*/

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistasProf = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistasProf))

// Desafio 2: Algum aluno é bolsista?
const algumBolsistaProf = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistaProf))