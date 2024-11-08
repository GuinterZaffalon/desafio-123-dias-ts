function dadosUsuario(nome: string, idade: number, salario: number){
    const printNome = "Bem vindo " + nome;
    const idadeInput = "Poxa vida chefe, já ta nos " + idade;
    const salarioInput = "E ganha isso? " + salario + "kkkkk";
    return(console.log(printNome, idadeInput, salarioInput))
}

console.log(dadosUsuario("Bart", 12, 0))