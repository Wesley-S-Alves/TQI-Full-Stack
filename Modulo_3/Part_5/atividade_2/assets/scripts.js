let array = prompt('Insira um array:')

function convertePar(array){
    if (array.length == false){
        return -1
    } else {
        array = array.replaceAll(" ",'').split(',').map(Number);
        for (let i = 0; i < array.length; i++){
            if (array[i] % 2 === 0){
                array[i] = 0;
            }
        }

        return array;
    }
}

alert(convertePar(array));