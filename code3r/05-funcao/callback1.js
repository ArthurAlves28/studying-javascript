// callback acontece quando passamos uma função como parâmetro e em determinado evento
// essa mesma função retorna

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// nesse caso o evento é cada um dos elementos percorridos no array pelo forEach
fabricantes.forEach(imprimir) // callback
fabricantes.forEach(fabricante => console.log(fabricante))