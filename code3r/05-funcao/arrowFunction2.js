function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // na função arrow, o this não sofre variação
        console.log(this.idade)
    }, 1000)
}

new Pessoa