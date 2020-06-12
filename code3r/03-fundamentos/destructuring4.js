function rand([min = 0, max = 1000]) { // desestruturação
    if (min > max) [min, max] = [max, min] // Verifica se os valores não estão trocados
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Casos de sucesso
console.log(rand([50, 40]))
console.log(rand(([992])))
console.log(rand([, 10]))
console.log(rand([]))

// Erro
console.log(rand())