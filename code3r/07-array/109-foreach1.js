const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))
// passando a função para uma variável constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)