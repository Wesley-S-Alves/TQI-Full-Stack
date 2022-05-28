//utiliza-se var para variáveis de escopo global ou local

//boolean
var vORf =false;
console.log(vORf);

// int
var number = 1;
console.log(typeof(number));

// string
var name = 'wesley';
console.log(typeof(name));

// null
var nulo;
console.log(typeof(nulo));

// let funciona apenas no escopo local

let variavel = 'wesley let'
console.log(variavel)

//const constante somente em globo local e de ver se inicializada

const constante = 'wesley const'; // não pode ser retribuído
console.log(constante)


// verificando escopos
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// comparação utiliza-se dois sinais de igual (==)

var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica (comparação de valor, tipo e classe), utiliza-se três sinais de igual (===) 

var comparacao2 = '0' === 0;
console.log(comparacao2);


// sinais são os mesmos do python 
//  + - * / % ** <> <= >=

/* Operadores 
 && -> and ! -> not  || -> or */
