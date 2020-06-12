// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // recebe a ou 1
    b = b || 1 // recebe b ou 1
    c = c || 1 // recebe c ou 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se for diferente de undefined atribui a senão atribui 1
    b = 1 in arguments // se existir o primeiro valor como parâmetro atribui 1
    c = isNaN(c) ? 1 : c // se for NaN atribui 1 senão atribui i valor de c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))