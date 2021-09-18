// Importación de módulos
const aritmetica = require('./Modulos/aritmetica');
const mayor_menor = require('./Modulos/mayor_menor');

// Introducción de datos desde teclado
const stdin = process.openStdin();

// Lógica del programa
console.log( "##################################################################################" );
console.log( "Teclea el número correspondiente, para elegir una opción" );
console.log( "\t\t¡Ejecución de operadores de comparación!" );
console.log( "1 Mayor" );
console.log( "2 Menor" );
console.log( "3 Positivo/Negativo" );
console.log( "\t\t¡Ejecución de operadores aritméticos!" );
console.log( "4 Suma" );
console.log( "5 Resta" );
console.log( "6 Multiplicación" );
console.log( "7 División" );
console.log( "##################################################################################" );

stdin.addListener( "data", function( d ) {
    // Valor introducido desde el teclado se guarda en option
    let opcion = parseInt(d);

    switch ( opcion ){
        case 1:
            console.log( 'Resultado de la comparación: ', mayor_menor.numeroMayor( 12 , 12 ) );
        break
        case 2:
            console.log( 'Resultado de la comparación: ', mayor_menor.numeroMenor( 12 , 12 ) );
        break
        case 3:
            console.log( 'Resultado de la comparación: ', mayor_menor.positivoNegativo( -2 ) );
        break
        case 4:
            console.log( 'Resultado de la suma: ', aritmetica.suma( 3 , -2 ) );
        break;
        case 5:
            console.log( 'Resultado de la resta: ',  aritmetica.resta( 10 , -5 ) );
        break;
        case 6:
            console.log( 'Resultado de la multiplicación: ',  aritmetica.multiplicacion( 101 , 10 ) );
        break;
        case 7:
            console.log( 'Resultado de la división: ', aritmetica.division( 0 , 10 ) );
        break;
        default:
            console.log( "Opción no valida!" );
        break;
    }
});

