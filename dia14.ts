// Um cliente de um banco tem um saldo positivo de R$500,00. 
// Faça um algoritmo que leia um cheque que entrou (compensado) e calcule o novo saldo, 
// mostrando (escrevendo) o saldo na tela.

function novoSaldo(cheque: number) {
    const saldo: number = 500;

    const saldoAtual = saldo - cheque;
    return console.log("Seu saldo é " + saldoAtual)
}