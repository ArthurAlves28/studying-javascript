const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // vai sair do bloco for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // vai pular a impressão do indice 5 e depois continuar a execução
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { // simula o uso o "goto"
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}