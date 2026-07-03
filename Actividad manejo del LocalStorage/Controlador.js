// FUNCION TRADICIONAL
function hacer_bucle(){
    for (let i = 0; i < 1000; i++) {
        console.log(i);
    }}

async function hacer_saludo(){
    const info =await hacer_bucle();
    console.log("Hola, este es un saludo");
}

// Este es un diccionario que contiene la información del cliente que se va a crear.
const info_cliente = {
    "nombre" : "Samuel",
    "apellido" : "Perez",
    "roll" : "Administrador"        
}

const boton_enviar = document.getElementById('crearCliente');
console.log(boton_enviar);

boton_enviar.addEventListener('click', ()=>{
    let info_storage = localStorage.getItem('clientes');
    console.log(info_storage)

    localStorage.setItem('info_cliente', JSON.stringify(info_cliente));

    localStorage.setItem('info_token', JSON.stringify([]));
    localStorage.setItem('info_api', JSON.stringify([]));
    localStorage.setItem('info_producto', JSON.stringify([]));

    hacer_saludo();
});

