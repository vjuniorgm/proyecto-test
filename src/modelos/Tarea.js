class Tarea {

    constructor(id, descripcion) {
      this.id = id;
      this.descripcion = descripcion;
      this.completada = false;
    }
  
    completar() {
      this.completada = true;
    }
  
    toString() {
      const estado = this.completada ? "✔️" : "❌";
      return `${this.id}. ${this.descripcion} [${estado}]`;
    }
  }
  
  module.exports = Tarea;
  
