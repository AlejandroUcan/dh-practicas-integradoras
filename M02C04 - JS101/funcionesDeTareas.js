const fs = require('fs');
const tareas = require('./tareas');

module.exports = function(argumentosConsola){
    if(argumentosConsola[2] != undefined) {
        switch(argumentosConsola[2]) {
            case 'listar':
                try {
                    const data = fs.readFileSync('./tareas.json', 'utf8');
                    let datos = JSON.parse(data);
                    datos.forEach(element => {
                        console.log(element);
                    });
                } catch(err) {
                    console.log(err);
                }
            break;

            case 'crear':
                if(argumentosConsola[3] == undefined){
                    console.log("Ingrese el título de la Tarea");
                } else {
                    let tituloTarea = argumentosConsola[3];
                    let tarea = {
                        titulo: tituloTarea,
                        estado: 'pendiente'
                    }

                    tareas.guardarTarea(tarea);
                }
            break;

            case 'filtrar':
                if(argumentosConsola[3] == undefined){
                    console.log("Ingrese el estado de las Tareas");
                } else {
                    let estadoTareas = argumentosConsola[3];
                    let tareasPorEstado = tareas.filtrarPorEstado(estadoTareas);

                    tareasPorEstado.forEach(function(tarea){
                        console.log(tarea);
                    });
                }
            
            break;

            default:
                console.log('\tNo entiendo qué quieres hacer.');
        }
    } else {
        console.log('\tAtención - Tienes que pasar una acción');

    }
}
