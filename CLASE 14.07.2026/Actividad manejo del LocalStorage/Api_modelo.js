// Clase encargada de interactuar con el localStorage
export default class Api_modelo {

    // ==========================================
    // Método para guardar un cliente
    // ==========================================
    guardar_cliente(lista_cliente, obj_cliente) {

        // Obtener la lista almacenada en localStorage
        let lista = JSON.parse(localStorage.getItem(lista_cliente));

        // Si no existe información, inicializar un arreglo vacío
        if (lista === null) {
            lista = [];
        }

        // Agregar el nuevo cliente al arreglo
        lista.push(obj_cliente);

        // Guardar nuevamente el arreglo actualizado
        localStorage.setItem(lista_cliente, JSON.stringify(lista));
    }

    // ==========================================
    // Método para imprimir todos los clientes
    // ==========================================
    imprimir_cliente() {

        // Obtener la información almacenada
        const info = JSON.parse(localStorage.getItem("lista_clientes"));

        // Mostrarla en consola
        console.log(info);
    }

    // ==========================================
    // Método para obtener la lista de clientes
    // (Retorna la información almacenada)
    // ==========================================
    obtener_cliente() {

        // Obtener la información del localStorage
        const info = JSON.parse(localStorage.getItem("lista_clientes"));

        // Retornar la información
        return info;
    }

}