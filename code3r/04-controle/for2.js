const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) { // retorna o indice do array
    console.log(i, notas[i]) // retorna o indice e as notas correspondentes
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) { // é possível percorrer um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)