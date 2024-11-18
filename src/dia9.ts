function mediaPonderada(nota1: number, nota2: number, nota3: number): number{
    let peso1 = nota1 * 1;
    let peso2 = nota2 * 2;
    let peso3 = nota3 * 3;

    let somaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);

    let somaPesos = peso1 + peso2 + peso3;

    let resultado = somaPonderada / somaPesos;

    return resultado
    
}

console.log(mediaPonderada(7, 3, 4));