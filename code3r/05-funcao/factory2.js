function criarProduto(nome, preco) {
    return {
        nome: nome, // poderia ser apenas a variavel que passamos como parâmetro
        preco: preco,
        disconto: 0.10
    }
}

console.log(criarProduto('celular', 1550))