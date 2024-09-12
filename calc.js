function number(value) {
    
    document.getElementById('result').value += value;
    
}
function operator(value) {
    document.getElementById('result').value += ' ' + value + ' ';
}
 
function calc() {
    // let resultField = document.getElementById('result');
    result.value = eval(result.value);
}

function clearResult() {
    document.getElementById('result').value = ' ';
}