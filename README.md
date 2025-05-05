Proyecto de Gestión de Tareas
Este proyecto tiene como objetivo crear una aplicación de gestión de tareas, utilizando GitFlow, SOLID y pruebas unitarias.

Pasos del Proyecto
1. Primer Paso: Configuración del Repositorio y GitFlow
Crea una rama develop a partir de la rama principal (main o master).

A partir de la rama develop, crea ramas de características (feature branches) para realizar las tareas asignadas.

Utiliza GitFlow para manejar las ramas. Cada tarea se debe desarrollar en una rama individual, y luego realizar el merge a develop al completar la tarea.

Tarea para 2 personas:

Crear la rama develop.

Asegurarse de seguir GitFlow para el manejo de las ramas.

2. Segundo Paso: Aplicación de la Estructura de Paquetes
Aplica los conceptos de SOLID para organizar el código y aplicar buenas prácticas.

Organiza el código en una estructura de paquetes adecuada para mantener la aplicación escalable y fácil de mantener.

Versiona este cambio sobre la rama develop.

Tarea para 2 personas:

Aplicar la estructura de paquetes siguiendo los principios de SOLID y versionar el cambio sobre la rama develop.

3. Ejecutar la Primera Tarea Individual
NACHO: Completar la función completarTarea.

EDUARDO: Completar la función eliminarTarea.

Una vez que cada uno termine su tarea, deberá:

Subir la rama correspondiente con un mensaje claro que especifique su tarea (por ejemplo, feature/completar-tarea o feature/eliminar-tarea).

Realizar el merge con la rama develop después de completar y probar su tarea.

4. Ejecutar la Segunda Tarea Individual
NACHO: Implementar la prueba unitaria (unit test) para la función eliminarTarea.

EDUARDO: Implementar la prueba unitaria (unit test) para la función listarTarea.

Una vez que cada uno termine su tarea, deberá:

Subir la rama correspondiente con un mensaje claro que especifique su tarea (por ejemplo, feature/unit-test-eliminar-tarea o feature/unit-test-listar-tarea).

Realizar el merge con la rama develop después de completar y probar su tarea.

Requerimientos
Todo el desarrollo debe ser probado a través de la consola de entrada de datos. Cada funcionalidad desarrollada debe ser verificada y probada antes de hacer el merge con la rama develop.

Comandos para Utilizar este Proyecto
Instalar dependencias:

Para instalar las dependencias necesarias para ejecutar el proyecto, utiliza el siguiente comando:

npm install
Levantar el Proyecto:

Para iniciar el proyecto, ejecuta el siguiente comando:
npm start
Ejecutar los Tests (Pruebas Unitarias):

Para ejecutar las pruebas unitarias, usa el siguiente comando:
npm test

Notas Importantes
Recuerda siempre seguir las buenas prácticas de programación al escribir código.

Asegúrate de que tu código sea claro y fácil de entender por otros desarrolladores.

Aplica los principios de SOLID para que tu código sea robusto y fácil de mantener.