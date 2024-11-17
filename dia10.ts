function calculoCamisetas(pequenas: number, medio: number, grande: number) {
    const precoPequena = 8;
    const precoMedia = 10;
    const precoGrande = 15;

    const calculo = (pequenas * precoPequena) + (medio * precoMedia) + (grande * precoGrande);

    return calculo
}

console.log(calculoCamisetas(7, 9, 7))