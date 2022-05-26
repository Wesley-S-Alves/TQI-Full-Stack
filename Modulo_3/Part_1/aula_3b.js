function returnEvenValues(array){
    let evenNums = []; // cria um array
    let oddNums = [];
    for(let i = 0; i < array.length; i++){//comando para repetição
        if (array[i] % 2 === 0){// condicional se
            evenNums.push(array[i])
        } else {// condicional senão
            oddNums.push(array[i])
        }
    }
    console.log('números pares:', evenNums,', números ímpares:', oddNums);
}

let array = [1,2,3,4,5,6,7,8]; 

returnEvenValues(array);