const readline = require("readline"); 
const {
  agregarTarea,
  listarTareas,
  completarTarea,
  eliminarTarea
} = require("./servicios/tareas");


function mostrarMenu() {
  console.log("\n📋 Gestor de Tareas (Memoria)");
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Elige una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        rl.question("Descripción: ", (desc) => {
          agregarTarea(desc);
          console.log("✅ Tarea agregada.");
          mostrarMenu();
        });
        break;
      case "2":
        const tareas = listarTareas();
        tareas.forEach(t => {
          // Formateamos la salida aquí, en la capa de presentación
          const estado = t.completada ? "✔️" : "❌";
          console.log(`${t.id}. ${t.descripcion} [${estado}]`);
        });
        mostrarMenu();
        break;
      case "3":
        rl.question("ID a completar: ", (id) => {
          const tarea = completarTarea(parseInt(id));
          tarea ? console.log("✔️ Completada.") : console.log("❗ No encontrada.");
          mostrarMenu();
        });
        break;
      case "4":
        rl.question("ID a eliminar: ", (id) => {
          eliminarTarea(parseInt(id));
          console.log("🗑️ Tarea eliminada.");
          mostrarMenu();
        });
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("❌ Opción inválida.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
