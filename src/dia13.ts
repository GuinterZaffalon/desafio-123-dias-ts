// O sistema de avaliação de uma determinada disciplina é composto por três provas.
// A primeira prova tem peso 2, a segunda tem peso 3 e a terceira tem peso 5. 
// Faça um algoritmo para calcular a média final de um aluno desta disciplina.

function calcularMedia(prova1: number, prova2: number, prova3: number) {
    const peso1 = 2 * prova1;
    const peso2 = 3 * prova2;
    const peso3 = 5 * prova3;

    const calculo = (peso1 + peso2 + peso3);
    const soma = peso1 + peso2 + peso3;

    const media = calculo / soma
    return(media)
}