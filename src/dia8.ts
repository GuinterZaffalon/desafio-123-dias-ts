function diasRestantes(dia: number, mes: number){
    var calcularMes = mes * 30;
    var diasFinais: number;

    if (dia < 30) {
        diasFinais = dia - 30
    } else{
        diasFinais = 0
    }

    var calculo = dia - diasFinais + calcularMes;
    return calculo
}

console.log(diasRestantes(21, 8));