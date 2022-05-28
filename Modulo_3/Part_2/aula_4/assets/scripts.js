//Estrutura condicionais

var player1=0;
var player2=1;
var board;

if(player1 > player2){
    console.log('player 1 wins!') 
}else if(player2>player1){
    console.log('player 2 wins')
} else{
    console.log('tied game')
}

 /*  aninhamento de ifs
if(){
    if(){

    }else if{

    }else
}*/

// if ternário

player1 != -1 && player2 != -1 ? console.log('Valids Players'): console.log('Invalids Players');


//switch/case 

switch(board){
    case board = player1 > player2:
        console.log('Player 1 wons');
        break;//stop the switch
    case board = player1 < player2:
        console.log('Player 2 wons');
        break;
    default:
        console.log('the game was tied')
}

//repetição

let array = ['valor1','valor2','valor3', 'valor4', 'valor5']

let object = {
    propriedade1:'valor1',
    propriedade2:'valor2',
    propriedade3:'valor3',

}
//for
for( i = 0; i < array.length; i++){
    console.log(array[i])
}
// for in  imprime indice
for( i in object){
    console.log(i)
}

//for of imprime valor

for(i of array){
    console.log(i)
}

for (i of object.propriedade1){
    console.log(i)
}

// while
var a = 0;
while (a < 10){
    a++;
    console.log(a)
}

//do
a=0;
do{
    a++;
    console.log(a);
}while(a <10);