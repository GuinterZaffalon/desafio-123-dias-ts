function Operacoes(numero1: number, numero2: number) {
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    const resultado = console.log("Os resultados são: soma: \n" + soma,
         "subtração: \n" + subtracao,
        "Multiplicação: \n" + multiplicacao,
        "Divisão: \n" + divisao )

    return resultado;
}

console.log(Operacoes(4, 9));