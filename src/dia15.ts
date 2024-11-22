// Uma empresa de venda de softwares paga a seu vendedor um salário fixo de R$800,00 por mês, 
// mais uma comissão de 15% pelo seu valor de vendas no mês. 
// Faça um algoritmo que leia o valor da venda e determine o salário total do funcionário. 
// Mostre as informações processadas.

function salario(valorVenda: number) {
    const salarioBase = 800;
    const comissaoVenda = 15

    const comissao = valorVenda * (comissaoVenda / 100);
    const salarioFinal = salarioBase + comissao;

    return salarioFinal;
}