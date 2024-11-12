// 6 . Um motorista deseja colocar no seu tanque X reais de gasolina. 
// Escreva um algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exiba quantos litros ele conseguiu colocar no tanque.

function calcularCombustivel(preco: number, pagamento: number) {
    const litros = pagamento / preco
    return litros
}

console.log(calcularCombustivel(4.65, 50))