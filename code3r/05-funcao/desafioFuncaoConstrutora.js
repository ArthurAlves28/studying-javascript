function criarPessoa(nome) {
    return {
        nome,

        falar() {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p = new criarPessoa('Arthur')
p.falar()