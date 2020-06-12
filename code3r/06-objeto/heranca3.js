const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Cria um novo objeto e estabelece o vinculo com o objeto pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writeble: false, enumerable: true } // O nome não pode ser alterado
})
console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo da cor ${filha2.corCabelo}`)


// Identifica os atributos prórpios do objeto filho
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}