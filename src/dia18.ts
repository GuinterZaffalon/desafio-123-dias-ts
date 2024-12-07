// 18 . Declare 2 variáveis A e B, leia um valor para cada uma delas e disponibilize estes valores em ordem crescente.

function decrescente(a: number, b: number) {
    const valorA: number = a;
    const valorB: number = b;

    if (valorA < valorB) return console.log(valorB, valorA);
    if (valorB < valorA) return console.log(valorA, valorB)
}