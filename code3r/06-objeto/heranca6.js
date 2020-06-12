function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Vem Bindo', 123)
const aula2 = new Aula('Abé Treve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prorotype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Vem Bindo', 321)
const aula4 = novo(Aula, 'Abé Treve', 654)
console.log('Aula', aula3, 'Aula', aula4)