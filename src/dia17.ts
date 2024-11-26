//Considerando que para um consórcio sabe-se o numero total de prestações, a quantidade de prestações pagas e o valor atual da prestação. 
//Escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor.

function prestacoes(total: number, pagas: number, valor: number) {
    const totalPrestacao: number = total;
    const prestacoesPagas: number = pagas;
    const valorPrestacao: number = valor;

    const calcularValorPago: number = prestacoesPagas * valorPrestacao;
    const calcularPrestacaoRestante: number = (totalPrestacao * prestacoesPagas) * valorPrestacao;

    console.log("Você pagou " + calcularValorPago + "e ainda deve " + calcularPrestacaoRestante);
}