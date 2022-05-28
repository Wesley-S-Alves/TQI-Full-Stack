function calc(){
    var operation =  Number(prompt('Escolha uma operação:\n 1- Soma:\n 2-Subtração:\n 3-Multiplicação:\n 4-Divisão real:\n 5-Divisão Inteira:\n 6-Potênciação'));

    function soma(x,y){
        return x + y;
    }

    function subtracao(x,y){
        return x - y;
    }
    
    function multiplacao(x,y){
        return x * y;
    }
    
    function divisaoReal(x,y){
        return x / y;
    }
    
    function divisaoInteira(x,y){
        return x % y;
    }
    
    function pontenciacao(x,y){
        return x ** y;
    }

  
    switch(operation){
        case 1:
            operation = soma();
            break;
        case 2:
            operation = subtracao();
            break;
        case 3:
            operation = multiplacao();
            break;
        case 4:
            operation = divisaoReal();
            break;
        case 5:
            operation = divisaoInteira();
            break;
        case 6:
            operation = potenciacao();
            break;
        default:
            operation = null;
            alert('opção inválida');
            break;
    }
    if (operation != null){
        var n1 = Number(prompt('Insira o primeiro valor: '))
        var n2 = Number(prompt('Insira o segundo valor: '))
    }

    return (operation(n1,n2))
    
}

alert(calc());