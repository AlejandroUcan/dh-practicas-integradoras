const fs = require('fs');

module.exports = function(argumento){
    if(argumento != undefined) {
        switch(argumento) {
            case 'listar':
                try {
                    const data = fs.readFileSync('./tareas.json', 'utf8');
                    let datos = JSON.parse(data);
                    console.log(datos);
                } catch(err) {
                    console.log(err);
                }
            break;

            default:
                console.log('\tNo entiendo qué quieres hacer.');
        }
    } else {
        console.log('\tAtención - Tienes que pasar una acción');

    }
}
