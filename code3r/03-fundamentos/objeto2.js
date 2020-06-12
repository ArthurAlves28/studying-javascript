console.log(typeof Object) // retorna uma função
console.log(typeof new Object) // cria uma instância do objeto; como chamar o construtor em java

const Cliente = function() {}
console.log(typeof Cliente) // também retrorna uma função
console.log(typeof new Cliente) // também cria um objeto

class Produto {} // padrão EX 2015 (ES6)
console.log(typeof Produto) // também retorna uma função, pois uma classe 
                            // representa uma forma diferente e criar uma função
console.log(typeof new Produto()) // também representa um objeto
