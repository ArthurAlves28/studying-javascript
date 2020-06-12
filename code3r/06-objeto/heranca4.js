function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto // função construtora
const obj2 = new MeuObjeto

// Objetos diferentes instanciados de um mesmo objeto pai apontam para o mesmo prototype
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

// Adicionando atributos e comportamento ao objeto MeuObjeto
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

// Outra forma de instanciar um objeto
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Algumas assertivas verdadeiras
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)