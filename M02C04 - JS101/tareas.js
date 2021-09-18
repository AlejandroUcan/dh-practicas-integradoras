const fs = require('fs');
const funcionesDeTareas = require('./funcionesDeTareas');

function leerJSON(ruta) {
    try {
        const datosEnJSON = fs.readFileSync(ruta, 'utf8');    
        let listaDeTareas = JSON.parse(datosEnJSON);
        
        return listaDeTareas;
    } catch (error) {
        console.log(error.message);
    }
}

function escribirJSON(tareas) {
    let datosConvertidos = JSON.stringify(tareas);

    fs.writeFileSync("./tareas.json", datosConvertidos, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("escritura exitosa");
        }
    }); 
}

function guardarTarea(tarea) {
    try {
        let listaTareas = this.leerJSON('tareas.json');

        listaTareas.push(tarea); 

        this.escribirJSON(listaTareas);
    } catch (err) {
        console.log(err.message);
    }
}

function filtrarPorEstado(estado) {
    let listadoTareas = this.leerJSON('tareas.json');

    let tareasPorEstado = listadoTareas.filter(function(tarea) {
        return tarea.estado == estado;    
    });
    
    return tareasPorEstado;
}

module.exports = {leerJSON, escribirJSON, guardarTarea, filtrarPorEstado};