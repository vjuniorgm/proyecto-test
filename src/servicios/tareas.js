const Tarea = require("../modelos/Tarea");

let tareas = [];
let contador = 1;
// Clase que maneja la colección de tareas

function agregarTarea(descripcion) {
    const tarea = new Tarea(contador++, descripcion);
    tareas.push(tarea);
    return tarea;
}

function listarTareas() {
    return tareas; // Solo devuelve las tareas como objetos, sin formateo
}

function completarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completar();
        return true;
    }
    return false;
}

function eliminarTarea(id) {
    // En base a un id se debe poder eliminar una tarea de la lista de tareas.
    tareas = tareas.filter(t => t.id!== id);
    /*
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tareas.splice();
        return true;
    }

    return tareas;*/
    
    //EDUARDO
}
function reiniciarTareas() {
    tareas = [];
    contador = 1;
}

module.exports = {
    agregarTarea,
    listarTareas,
    completarTarea,
    eliminarTarea,
    reiniciarTareas
};