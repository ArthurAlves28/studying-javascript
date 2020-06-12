function rand({min = 0, max = 1000}) { // remove os campos da própria função e os recebe como parâmetro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40} // atribui valores diretamente aos campos
console.log(rand(obj))
console.log(rand({min: 955})) // a função pode receber apenas um valor
console.log(rand({})) // ou valor nenhum, em um objeto vazio
console.log(rand()) // é preciso passa um objeto para função