var n1 = Number(prompt('Insira o primeiro número::'));
var n2 = Number(prompt('Insira o segundo número:'));

function resposta(n1,n2){
    const compara = (n1 === n2)?'são iguais':'não são iguais';
    const soma = n1 + n2;
    const maiorDez = soma > 10 ? 'maior que 10' : 'menor que dez';
    const maiorVinte = soma > 20 ? 'maior que 20': 'menor que 20';
    return `Os números ${n1} e ${n2} ${compara}. Sua soma é ${soma}, que é ${maiorDez} e ${maiorVinte}.`;
}

console.log(resposta(n1,n2));