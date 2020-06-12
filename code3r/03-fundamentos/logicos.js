function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2 // operação curto-circuito se o promeiro operando for falso, não é necessário observar o segundo operando
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operação bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // operador != tambem simulo a operação xor
    const manterSaldavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaldavel} // retornando um objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))