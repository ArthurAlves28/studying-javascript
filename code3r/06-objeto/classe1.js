class Lancamento {
    // esse método será chamado quando fizermos um "new" na classe Lancamento
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor=valor
    }
}

class CicloFinanceiro {
    // esse método será chamado quando fizermos um "new" na classe CicloFinanceiro
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // o operador "...lancamentos" aceita parâmetros variáveis
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // calcula e retorna os lançamentos
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())