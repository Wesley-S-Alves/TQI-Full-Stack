//tipos de funcões

//declarativa -  requer nome
function declarativa(){
    console.log('declarativa');
}
declarativa();

// expressão de função - nome opcional

var funcao = function(){
    console.log('mensagem de expressão de função')
}
funcao();
//arrow function - anonimas

var funcao = () => {
    console.log('sou uma arrow function')
}
funcao();
