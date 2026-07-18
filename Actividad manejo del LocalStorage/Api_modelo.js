// Clase encargada de interactuar con el localStorage
export default class Api_modelo {
        guardar_cliente(lista_cliente, obj_cliente) {
        // Obtener la lista almacenada en localStorage
        let lista = localStorage.getItem(lista_cliente);

        // Si no existe información, inicializar un arreglo vacío
        if (lista === null) {
            lista = [];
        } else {
            lista = JSON.parse(lista);
        }

        // Verificar duplicados
        const nombreduplicado = lista.some(cliente => 
            cliente.nombre.toLowerCase() === obj_cliente.nombre.toLowerCase() &&
            cliente.apellido.toLowerCase() === obj_cliente.apellido.toLowerCase()
        );
        
        if (nombreduplicado) {
            alert('El cliente "' + obj_cliente.nombre + ' ' + obj_cliente.apellido + '" ya existe');
            return false; // ✅ Retorna false cuando hay duplicado
        }

        // Agregar el nuevo cliente al arreglo
        lista.push(obj_cliente);

        // Guardar nuevamente el arreglo actualizado
        localStorage.setItem(lista_cliente, JSON.stringify(lista));
        
        return true; // ✅ Retorna true cuando guarda exitosamente
    }


    // Método para imprimir todos los clientes

    imprimir_cliente() {

        // Obtener la información almacenada
        const info = JSON.parse(localStorage.getItem("lista_clientes"));

        // Mostrarla en consola
        console.log(info);
    }

    //  Método para obtener la lista de clientes
    // (Retorna la información almacenada)

    obtener_cliente() {

        // Obtener la información del localStorage
        const info = JSON.parse(localStorage.getItem("lista_clientes"));

        // Retornar la información
        return info;
    }

}