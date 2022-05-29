function validaArray(arr, num){
    try {
        if (!arr && !num) throw new ReferenceError("Sem parâmetros");
        if (typeof(arr)!=='object') throw TypeError('o array inserido não é do tipo object')
        if(typeof(arr)!=='number') throw TypeError('o array não é do tipo number')
        if(arr.length > num) throw RangeError(`o tamanho do array é maior que o número enviado. 
        tamanho do array =${arr.length}, tamanho definido = ${num}`)
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log('Erro de referencia'); 
            throw e;
        } else if (e instanceof TypeError){
            console.log('tipo inserido errado');
            throw e;
        } else if(e instanceof RangeError){
            console.log('tamanho errado!');
            throw e;
        } else{
            console.log("tipo de erro não esperado:" + e);
        }
    }
}
console.log(validaArray())
