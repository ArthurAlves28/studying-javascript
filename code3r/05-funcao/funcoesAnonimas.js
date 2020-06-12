const soma = function (x, y) { // função anonima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // função anonima
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // função anonima
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // função arrow (sempre anonima)

const pessoa = {
    falar: function () { // função anonima
        console.log('Opa')
    }
}

pessoa.falar()