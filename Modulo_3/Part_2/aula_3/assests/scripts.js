// arrays
//pode receber todos os tipos de dados
let arrays = ['string',1,false,['array2', 2]];
console.log(arrays);

//acessando indices 

console.log(arrays[3]);

//funções array

//forEach: itera sobre o array
arrays.forEach(function(item, index){console.log(item, index)})

//push: incrementa um item no fim do array

arrays.push('new item');
console.log(arrays);

//pop: deleta o ultimo item do array

arrays.pop();
console.log(arrays)


//shift: deleta o primeiro item do array

//unshift: adciona um item no inicio do array

//indexOf: retorna o indice de um item

//splice: apaga os index por index, podendo utilizar start:end -> (0,3)

//slice: retorna uma parte do array, utilizando start:end 


//Criando Objetos
function tomarCafé(){
    return('quero caféé')
}
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    function: tomarCafé()
};

console.log(xicara)
console.log(xicara.function)

var {cor, tamanho} = xicara;
console.log(tamanho)