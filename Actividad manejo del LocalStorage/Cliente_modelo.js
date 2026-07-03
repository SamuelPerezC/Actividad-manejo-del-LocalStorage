class Cliente_modelo {
    constructor(datonombre, datoapellido, datoroll) {
        this.nombre = datonombre;
        this.apellido = datoapellido;
        this.roll = datoroll;
    }

// SEGUIDAMENTE, LOS METODOS DE ENCAPSULAMIENTO PARA CADA ATRIBUTO DE LA CLASE CLIENTE_MODELO SON LOS SIGUIENTES:

get_nombre() {
        return this.nombre;
    }

set_nombre(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

get_apellido() {
        return this.apellido;
    }

set_apellido(nuevo_apellido) {
        this.apellido = nuevo_apellido;
    }

get_roll() {
        return this.roll;
    }

set_roll(nuevo_roll) {
        this.roll = nuevo_roll;
    }

}