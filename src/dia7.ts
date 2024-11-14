function precoPrato(peso: number) {
    const precoKg = 14.00;
    const resultadoPreco = peso * precoKg;
    return console.log(resultadoPreco)
};

console.log(precoPrato(1.7));