// Revisão das aulas 96, 97 e 98

const animal = {
    reino: 'Animalia',
    especie: '',
    raca: '',
    peso: 0.00,
    status() {
        return `Reino: ${this.reino} \nEspécie: ${this.especie}\nRaça: ${this.raca}\nPeso: ${this.peso} Kg`
    }
}

const gato = Object.create(animal)
gato.especie = 'Felis catus'
gato.raca = 'Maine coon'
gato.peso = 12.5
console.log(gato.status())

const cao = {}
Object.setPrototypeOf(cao, animal)
cao.especie = 'C. lupus'
cao.raca = 'Labrador retriever'
cao.peso = 30.8
console.log(cao.status())

const ave = {
    status() {
        return `Apelido: ${this.apelido} \n${super.status()}`
    }
}
Object.setPrototypeOf(ave, animal)
ave.apelido = 'Pidgey'
ave.especie = 'P. ruber'
ave.raca = 'Flamingo americano'
ave.peso = 10.4
console.log(ave.status())

for(let key in ave) {
    ave.hasOwnProperty(key) ?
    console.log('Original:', key) : console.log('De fabrica:', key)
}