// Cadeia de prototipo (prototype chain)
Object.prototype.attr0 = '0' // Não é recomendado
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

// Escala a cadeia de prototipos a procura dos atributos correspondentes
// Acessa a propriedade ptototype de Object
console.log(filho.attr0)
// Acessa os atributos dos objetos herdados
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual < this.velMax) {
            this.velAtual =+ delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} KM/h de ${this.velMax} KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing essa variável substitui o valor padrão para velocidade maxima
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Super faz referência ao objeto que está no objeto pai
    }
}

// Estebelece o vinculo entre prototipo e objeto original
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Apenas imprime o que de fato está implementado nos objetos
console.log(ferrari)
console.log(volvo)

// Acessa o método declarado no Objeto carro
volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())