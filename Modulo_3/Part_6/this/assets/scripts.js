function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome}  terá ${this.idade + anos} anos de idade.`;
}

let pessoa1 = {
    nome:'maria',
    idade:15
}

let pessoa2 = {
    nome:'claudia',
    idade:32
}

console.log(calculaIdade.call(pessoa1, 15));