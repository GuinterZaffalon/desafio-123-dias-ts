//Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias.
//Faça um algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre 30 dias.

function diasAcidentes(momento: number) {

    const diasPorMes = 30;
    const mesesPorAno = 12;

    const totalAno = Math.floor(momento / (diasPorMes * mesesPorAno));

    const restanteDiasAno = momento % (diasPorMes * mesesPorAno);
    const totalMes = Math.floor(restanteDiasAno / diasPorMes);

    const diasRestantes = restanteDiasAno % diasPorMes;

    return {
        anos: totalAno,
        meses: totalMes,
        dias: diasRestantes,
    };
}

console.log(diasAcidentes(400));
