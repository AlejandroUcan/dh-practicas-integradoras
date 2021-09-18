module.exports = function(num1, num2) {
    if(num1 === 0 || num2 === 0){
        console.log('No se puede dividir por cero');
    } else {
        console.log(num1 / num2);
    }
}
