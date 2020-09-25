const fs = require('fs') // modulo de leitura embutido no node.js
const { config } = require('process')

const caminho = __dirname + '/134-arquivo.json'
// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// console.log(__dirname + __filename)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// outra forma de ler o arquivo JSON
const otherConfig = require('./134-arquivo.json')
console.log(otherConfig.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})