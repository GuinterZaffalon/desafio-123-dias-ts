function salarioLiquido(salario: number): { descontoINSS: number; salarioTotal: number } {
    const descontoINSS: number = 8.5;
    const calculoDesconto = salario * (descontoINSS / 100);
    const salarioTotal = salario - calculoDesconto;

    return { descontoINSS, salarioTotal };
}

function exibirSalario(nome: string, salarioBruto: number): void {
    const { descontoINSS, salarioTotal } = salarioLiquido(salarioBruto);
    //isso aqui poderia simplementes retornar essas duas variaveis como
    //objeto e acessar com nome.propriedadeDeCima

    console.log(`Bem-vindo, ${nome}!`);
    console.log(`Seu salário bruto é: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`O desconto de INSS (8,5%) é: R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Seu salário líquido é: R$ ${salarioTotal.toFixed(2)}`);
}

const nomeFuncionario = "João";
const salarioBrutoFuncionario = 3000;
exibirSalario(nomeFuncionario, salarioBrutoFuncionario);