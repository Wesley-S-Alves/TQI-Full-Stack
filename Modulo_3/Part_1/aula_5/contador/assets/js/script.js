var currentNumber = 0;
var currentNumberWwrapper = document.getElementById('currentNumber');
function increment(){
    currentNumber++;
    currentNumberWwrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber--;
    currentNumberWwrapper.innerHTML = currentNumber;
}