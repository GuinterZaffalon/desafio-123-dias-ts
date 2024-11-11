function custoAutomovel(fabrica: number) {
    const custoFabrica: number = 0.45
    const custoRevendedor: number = 0.25
    const resultadoFinal = (fabrica * custoFabrica) + (fabrica * custoRevendedor) + fabrica;
    return resultadoFinal;
}

console.log(custoAutomovel(20000))