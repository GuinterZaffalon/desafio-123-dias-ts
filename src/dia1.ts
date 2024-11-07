const nota1: number = 89;
const nota2 : number = 56;

function calcularMedia(media1: number, media2: number) {
    const soma = media1 + media2;
    const divisao = soma / calcularMedia.length;
    console.log(divisao);
};

calcularMedia(nota1, nota2);