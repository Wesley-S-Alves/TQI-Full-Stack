function alunosAprovados(array, media){
    let alunosAprovados = [];
    for(aluno of array){
        if (aluno['nota'] > media){
            alunosAprovados.push(aluno)
        }
    }
    return alunosAprovados;
}

aluno1 = {
    nome:"Carlos",
    nota:10
}

aluno2 = {
    nome:'Daniel',
    nota:8
}
array = [aluno1, aluno2];

console.log(alunosAprovados(array, 7));