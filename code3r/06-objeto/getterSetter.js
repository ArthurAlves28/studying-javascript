const sequencia = {
    // Conveção que informa que a variável 
    // só deve ser acessada internamente
    _valor: 1, 
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

// O JavaScript reconhece que a chamada abaixo se refere ao método get valor()
console.log(sequencia.valor, sequencia.valor)

// Reconhece a atribuição abaixo como o método set valor()
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)