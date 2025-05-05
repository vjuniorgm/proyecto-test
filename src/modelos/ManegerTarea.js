// Clase que maneja la colección de tareas
class ManagerTarea {
    constructor() {
      this.tareas = [];
      this.contador = 1;
    }
  
    agregarTarea(descripcion) {
      const tarea = new Tarea(this.contador++, descripcion);
      this.tareas.push(tarea);
      return tarea;
    }
  
    listarTareas() {
      return this.tareas; // Solo devuelve las tareas como objetos, sin formateo

    }
  
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
          tarea.completar();
          return true;
        }
        return false;
    }
  
    eliminarTarea(id) {
      // En base a un id se debe poder eliminar una tarea de la lista de tareas.
      return this.tareas;
      //EDUARDO
    }
    reiniciarTareas() {
      this.tareas = [];
      this.contador = 1;
    }
  }