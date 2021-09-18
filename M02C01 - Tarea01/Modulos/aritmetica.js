// Declaración del módulo aritmetica.js
const aritmetica = {};

// Función suma(a, b)
aritmetica.suma = ( a, b ) => {
    return a + b;
}

// Función resta(a, b)
aritmetica.resta = ( a, b ) => {
    if( a < b ){
        return "a debe ser mayor que b para restar";
    }else{
        return a - b;
    }
}

// Función multiplicacion(a, b)
aritmetica.multiplicacion = ( a, b ) => {
    if( a === 0 || b === 0 ){
        return 0;
    }else{
        return a * b;
    }
}

// Función division(a, b)
aritmetica.division = ( a, b ) => {
    if( a === 0  ){
        return 0;
    }else if( b == 0){
        return 0;
    }else{
        return a / b;
    }
}

// Exportación del módulo
module.exports = aritmetica;
