// Declaración del módulo mayor_menor.js
const mayor_menor = {};

// Función numeroMayor(a, b)
mayor_menor.numeroMayor = ( a, b ) => {
    if( a > b ){
        return a;
    }else if( b > a ){
        return b;
    }else{
        return "==";
    }
}

// Función numeroMenor(a, b)
mayor_menor.numeroMenor = ( a, b ) => {
    if( a < b ){
        return a;
    }else if( b < a ){
        return b;
    }else{
        return "==";
    }
}

// Función positivoNegativo(a)
mayor_menor.positivoNegativo = ( a, b ) => {
    if( a > 0 ){
        return "Número positivo";
    }else if( a === 0 ){
        return "Número cero";

    }else{
        return "Número negativo";
    }
}

// Exportación del módulo
module.exports = mayor_menor;
