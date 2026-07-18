import Api_modelo from './Api_modelo.js';
import Cliente_modelo from './Cliente_modelo.js';

//me traido el boton del html
const boton_registrar = document.getElementById('boton_registrar');
boton_registrar.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre').value.trim();
    // el trim lo usamos para eliminar espacios en blanco
    const apellido = document.getElementById('apellido').value.trim();
    const rol = document.getElementById('rol').value.trim();

    //Validación: Si algún campo está vacío
    if (nombre === '' || apellido === '' || rol === '') {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {
        //Crear una instancia de Cliente_modelo (VALIDA LONGITUD)
        const nuevoCliente = new Cliente_modelo(nombre, apellido, rol);

    // Guardar usando la clase Api_modelo
    const api = new Api_modelo();
    const resultado = api.guardar_cliente('lista_clientes', nuevoCliente);
    
    //  VERIFICAR si el Modelo guardó exitosamente
    if (resultado === false) {
        // El Modelo ya mostró el alert de duplicado
        // Solo terminamos la ejecución sin mostrar mensajes de éxito
        return;
    }

    // Si llegamos aquí, significa que se guardó correctamente
    alert("El cliente ha sido registrado");
    alert('Bienvenido ' + nombre + ' ' + apellido);

    console.log("Click detectado");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Rol:", rol);

    } catch (error) {
        alert(error.message);
    }
});