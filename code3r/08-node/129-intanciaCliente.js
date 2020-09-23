const contadorA = require('./129-instanciaUnica')
const contadorB = require('./129-instanciaUnica')

const contadorC = require('./129-instanciaNova')()
const contadorD = require('./129-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)