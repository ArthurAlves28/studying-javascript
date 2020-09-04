const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// retornnar o array apenas com os preços

const preco = e => JSON.parse(e).preco
let resultado = carrinho.map(preco)
console.log(resultado)

// solução do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)