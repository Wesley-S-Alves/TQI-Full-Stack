let palavra = prompt('Insira uma palavra')

function palindrome(palavra){
    palavra = palavra.replaceAll(" ","");
    let checa = palavra === palavra.split('').reverse().join('')? 'é um palindromo':'não é um palindromo';
    return checa;
}

alert(palindrome(palavra));