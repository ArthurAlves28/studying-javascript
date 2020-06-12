const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // OO básico, retorna o atributa saudação do objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // retorna undefined
// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // amarra o método falar ao objeto pessoa
falarDePessoa()