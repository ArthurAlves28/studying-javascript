const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }

// Converte um objeto em texto
// A função não é convertida em texto, apenas os atributos
console.log(JSON.stringify(obj))

// Transformando um JSON em objeto
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true , "d": {}, "e": [] }'))
