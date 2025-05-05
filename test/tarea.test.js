const {
    agregarTarea,
    listarTareas,
    completarTarea,
    eliminarTarea,
    reiniciarTareas
  } = require("../src/servicios/tareas");
  
  beforeEach(() => {
    reiniciarTareas();
  });
  
  test("agrega tarea y la lista", () => {
    agregarTarea("Aprender Node");
    const tareas = listarTareas();
    expect(tareas.length).toBe(1);
    expect(tareas[0].descripcion).toBe("Aprender Node");
  });
  
  test("completa una tarea", () => {
    const t = agregarTarea("Estudiar testing");
    completarTarea(t.id);
    const tareas = listarTareas();
    expect(tareas[0].completada).toBe(true);
  });

  //TODO IMPLMENTAR UNIT TEST PARA ELIMINAR TAREA(NACHO) Y LISTAR TAREA(EDUARDO)
  