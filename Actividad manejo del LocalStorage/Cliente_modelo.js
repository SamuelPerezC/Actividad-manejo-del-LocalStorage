
export default class Cliente_modelo {
    constructor(datonombre, datoapellido, datoroll) {
        // Validación de longitud de los campos
        if (datonombre.length <= 3) {
            throw new Error("El nombre debe tener mas de 3 caracteres");
        }
        if (datoapellido.length <= 3) {
            throw new Error("El apellido debe tener mas de 3 caracteres");
        }
        if (datoroll.length <= 3) {
            throw new Error("El rol debe tener mas de 3 caracteres");
        }
        
        this.nombre = datonombre;
        this.apellido = datoapellido;
        this.roll = datoroll;
    }

    toObject() {
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            rol: this.roll  // Aquí se mapea 
        };
    }

    // Metodos de encapsulamiento
    get_nombre() {
        return this.nombre;
    }

    get_apellido() {
        return this.apellido;
    }

    get_roll() {
        return this.roll;
    }
}


