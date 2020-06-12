function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { // dispara uma outra função apartir de um intervalo definido 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // a cada 1000 millesegundo a função será executada
} // amarra a função setInterval ao objeto Pessoa

new Pessoa 